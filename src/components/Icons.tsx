export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} />
    </svg>
  )
}

export function Mark() {
  return (
    <svg viewBox="0 0 36 36" width="36" height="36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="currentColor" />
      <path
        d="M10 11h6v13c0 5-7 5-7 0M28 13c-10-6-14 15 0 11"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
