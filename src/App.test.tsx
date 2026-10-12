import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { profile } from './content'

describe('recruiter navigation', () => {
  it('exposes the three projects in priority order with their real source repositories', () => {
    render(<App />)
    const cards = screen.getAllByRole('article')
    expect(
      cards.map(
        (card) => within(card).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(['SignalSource', 'Opportunity Scout', 'Stratus One'])
    expect(
      within(cards[0]).getByRole('link', {
        name: /View SignalSource on GitHub/i,
      }),
    ).toHaveAttribute('href', 'https://github.com/JoshkieChan/Signal-Source')
    expect(
      screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('href') === '#'),
    ).toHaveLength(0)
  })

  it('opens and closes the mobile navigation after choosing a section', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Menu/ })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu with Escape and returns focus to its trigger', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Menu/ })
    await user.click(toggle)
    screen.getByRole('link', { name: 'About' }).focus()
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('links to the approved email and existing résumé', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Get in touch/ })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    )
    expect(screen.getByRole('link', { name: /résumé/i })).toHaveAttribute(
      'href',
      '/resume.pdf',
    )
    expect(
      screen.queryByRole('link', { name: /Find me on GitHub/ }),
    ).not.toBeInTheDocument()
  })

  it('changes project screenshots by keyboard and exposes the selected state', async () => {
    const user = userEvent.setup()
    render(<App />)
    const controls = screen.getByRole('group', {
      name: 'SignalSource screenshots',
    })
    const booking = within(controls).getByRole('button', {
      name: 'Booking',
    })
    booking.focus()
    await user.keyboard('{Enter}')
    expect(booking).toHaveAttribute('aria-pressed', 'true')
    expect(
      within(controls).getByRole('button', { name: 'Detailing' }),
    ).toHaveAttribute('aria-pressed', 'false')
    expect(
      screen.getByRole('img', { name: /SignalSource booking configuration/ }),
    ).toHaveAttribute('src', '/images/signal-booking-desktop.webp')
    expect(
      screen.getByRole('link', {
        name: 'Open SignalSource Booking screenshot at full size',
      }),
    ).toHaveAttribute('href', '/images/signal-booking-desktop.webp')
  })
})
