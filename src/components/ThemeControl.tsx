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
    <div className="theme-control" role="group" aria-label="Color theme">
      {(['light', 'dark', 'system'] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-label={`${option[0].toUpperCase()}${option.slice(1)} theme`}
          title={`${option[0].toUpperCase()}${option.slice(1)} theme`}
          aria-pressed={theme === option}
          onClick={() => {
            setTheme(option)
            try {
              localStorage.setItem('portfolio-theme', option)
            } catch {
              /* Works without storage. */
            }
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {option === 'light' ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
              </>
            ) : option === 'dark' ? (
              <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />
            ) : (
              <>
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8m-4-4v4" />
              </>
            )}
          </svg>
        </button>
      ))}
    </div>
  )
}
