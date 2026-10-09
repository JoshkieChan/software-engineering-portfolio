import { useState } from 'react'
import { Arrow, Mark } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a
        className="brand"
        href="#home"
        aria-label="Joshua Caburian, home"
        onClick={() => setOpen(false)}
      >
        <Mark />
        <span>
          Joshua Caburian<span className="brand-sub">Software Engineer</span>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <nav
        id="main-navigation"
        className={open ? 'navigation is-open' : 'navigation'}
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
          }
        }}
      >
        <a href="#projects" onClick={() => setOpen(false)}>
          Selected work
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#approach" onClick={() => setOpen(false)}>
          Approach
        </a>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s connect <Arrow diagonal />
        </a>
      </nav>
    </header>
  )
}
