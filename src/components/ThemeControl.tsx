import { useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'

export function ThemeControl() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      return saved === 'light' || saved === 'dark' ? saved : 'system'
    } catch {
      return 'system'
    }
  })

  useEffect(() => {
    const system = window.matchMedia?.('(prefers-color-scheme: dark)')
    const apply = () => {
      const resolved =
        theme === 'system' ? (system?.matches ? 'dark' : 'light') : theme
      document.documentElement.dataset.theme = resolved
      document
        .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
        .forEach((meta) => {
          meta.content = resolved === 'dark' ? '#151c18' : '#f5f5ef'
        })
    }
    apply()
    system?.addEventListener('change', apply)
    return () => system?.removeEventListener('change', apply)
  }, [theme])

  return (
    <label className="theme-control">
      Theme
      <select
        value={theme}
        onChange={(event) => {
          const next = event.target.value as Theme
          setTheme(next)
          try {
            localStorage.setItem('portfolio-theme', next)
          } catch {
            /* Selection still works when storage is unavailable. */
          }
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  )
}
