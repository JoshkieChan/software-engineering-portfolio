import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

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
    first.getByText(/multi-day allocation remains incomplete/),
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
