import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { projects } from '../src/content'

test('project notes, source links, and page accessibility', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page).toHaveTitle('Joshua Caburian — Software Engineer')
  await page.getByRole('link', { name: 'Explore my work' }).click()
  await expect(page).toHaveURL(/#projects$/)
  const first = page.getByRole('article').first()
  await first.locator('summary').click()
  await expect(
    first.getByRole('heading', { name: 'The implementation' }),
  ).toBeVisible()
  await expect(
    first.getByText(/Staging verified booking\/capacity behavior/),
  ).toBeVisible()
  await first.locator('summary').click()
  await expect(
    first.getByRole('heading', { name: 'The implementation' }),
  ).toBeHidden()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(
    results.violations.map((rule) => ({
      id: rule.id,
      nodes: rule.nodes.map((node) => ({
        target: node.target,
        problem: node.failureSummary,
      })),
    })),
  ).toEqual([])
  expect(errors).toEqual([])
})

test('keyboard access and working mobile menu', async ({ page }, testInfo) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main$/)
  if (testInfo.project.name === 'mobile') {
    const menu = page.getByRole('button', { name: /Menu|Close/ })
    await menu.click()
    await expect(menu).toHaveAttribute('aria-expanded', 'true')
    await page.getByRole('link', { name: 'About', exact: true }).click()
    await expect(menu).toHaveAttribute('aria-expanded', 'false')
    await expect(page).toHaveURL(/#about$/)
  }
})

test('fits narrow screens with expanded technical notes', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  for (const summary of await page.locator('summary').all())
    await summary.click()
  expect(
    await page
      .locator('html')
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe('auto')
  const overflow = await page.evaluate(() => ({
    width: window.innerWidth,
    document: document.documentElement.scrollWidth,
    elements: [...document.querySelectorAll('main *')]
      .filter((el) => el.getBoundingClientRect().right > window.innerWidth)
      .map((el) => el.className),
  }))
  expect(overflow.document, JSON.stringify(overflow)).toBeLessThanOrEqual(
    overflow.width,
  )
  await expect(
    page.getByRole('link', { name: 'Get in touch' }),
  ).toHaveAttribute('href', 'mailto:joshkiechan12345@gmail.com')
})

test('real screenshots, implementation links, and résumé are available', async ({
  page,
  request,
}, testInfo) => {
  await page.goto('/')
  for (const project of projects) {
    const card = page.getByRole('article', { name: project.name, exact: true })
    await expect(
      card.getByRole('link', { name: `View ${project.name} on GitHub` }),
    ).toHaveAttribute(
      'href',
      `https://github.com/JoshkieChan/${project.repository}`,
    )
    await card.locator('summary').click()
    await expect(
      card.getByRole('link', { name: 'Explore the implementation' }),
    ).toHaveAttribute(
      'href',
      `https://github.com/JoshkieChan/${project.repository}/blob/main/${project.sourcePath}`,
    )
    await card.locator('summary').click()
    if (!project.screenshots) continue
    for (const screenshot of project.screenshots) {
      const control = card.getByRole('button', {
        name: screenshot.label,
        exact: true,
      })
      await control.focus()
      await control.press('Enter')
      await expect(control).toHaveAttribute('aria-pressed', 'true')
      const image = card.getByRole('img', { name: screenshot.alt, exact: true })
      await image.scrollIntoViewIfNeeded()
      await expect(image).toBeVisible()
      await expect
        .poll(() =>
          image.evaluate(
            (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
          ),
        )
        .toBe(true)
      await expect(
        card.getByRole('link', {
          name: `Open ${project.name} ${screenshot.label} screenshot at full size`,
        }),
      ).toHaveAttribute('href', screenshot.src)
    }
    await card
      .getByRole('button', { name: project.screenshots[0].label, exact: true })
      .click()
  }
  const resume = page.getByRole('link', { name: 'View résumé' })
  await expect(resume).toHaveAttribute('href', '/resume.pdf')
  const response = await request.get('/resume.pdf')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('application/pdf')
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-')
  await page.goto('/')
  for (const image of await page.locator('.gallery-figure img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect
      .poll(() =>
        image.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true)
  }
  await page.getByRole('heading', { level: 1 }).scrollIntoViewIfNeeded()
  await page.screenshot({
    path: testInfo.outputPath('portfolio.png'),
    fullPage: true,
  })
})

test('every internal navigation target resolves', async ({ page }) => {
  await page.goto('/')
  const links = await page
    .locator('a[href^="#"]')
    .evaluateAll((elements) => elements.map((el) => el.getAttribute('href')!))
  for (const hash of links) {
    await expect(page.locator(hash)).toHaveCount(1)
  }
  const navigation = page.getByRole('navigation', { name: 'Main navigation' })
  for (const name of ['Selected work', 'About', 'Approach', 'Let’s connect']) {
    const toggle = page.getByRole('button', { name: /Menu|Close/ })
    if (await toggle.isVisible()) await toggle.click()
    const link = navigation.getByRole('link', { name, exact: true })
    const hash = await link.getAttribute('href')
    await link.click()
    await expect(page).toHaveURL(new RegExp(`${hash}$`))
  }
})

test('follows system light and dark appearance without reloading', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveCSS(
    'background-color',
    'rgb(245, 245, 239)',
  )
  await page.emulateMedia({ colorScheme: 'dark' })
  await expect(page.locator('html')).toHaveCSS(
    'background-color',
    'rgb(21, 28, 24)',
  )
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark')
  for (const summary of await page.locator('summary').all())
    await summary.click()
  const toggle = page.getByRole('button', { name: /Menu|Close/ })
  if (await toggle.isVisible()) await toggle.click()
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(results.violations).toEqual([])
  for (const summary of await page.locator('summary').all())
    await summary.click()
  if (await toggle.isVisible()) await toggle.click()
  for (const image of await page.locator('.gallery-figure img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect
      .poll(() =>
        image.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true)
  }
  await page.getByRole('heading', { level: 1 }).scrollIntoViewIfNeeded()
  await page.screenshot({
    path: testInfo.outputPath('dark.png'),
    fullPage: true,
  })
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveCSS(
    'background-color',
    'rgb(245, 245, 239)',
  )
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light')
})
