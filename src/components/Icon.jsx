const paths = {
  arrowRight: <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m0 0H8m9 0v9" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M4.5 5.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.3l.6 3a1.5 1.5 0 0 1-.8 1.6l-1.3.8a12 12 0 0 0 4.8 4.8l.8-1.3a1.5 1.5 0 0 1 1.6-.8l3 .6a1.5 1.5 0 0 1 1.3 1.5v2a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 4.5 5.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  star: (
    <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-13 0 9-4.5 13-11 13a5 5 0 0 1-5 0Z" />
      <path d="M9 15c2-2.5 4.5-4.5 8-6" />
    </>
  ),
  flame: (
    <path d="M12 3c1.2 4.6 5.6 6.3 5.6 11.6A5.6 5.6 0 0 1 12 20a5.6 5.6 0 0 1-5.6-5.4C6.4 11 8 8.6 12 3Z" />
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8.4a3.8 3.8 0 0 1 7 2.4C19 15.6 12 20 12 20Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrowLeft: <path d="M20 12H4m0 0 6-6m-6 6 6 6" />,
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
      <path d="M8.2 10V7.6a3.8 3.8 0 0 1 7.6 0V10" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M4 4l16 16" />
      <path d="M9.9 5.9A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17.6 17.6 0 0 1-3.2 4.1" />
      <path d="M6.4 7.9A17.5 17.5 0 0 0 2.5 12S6 18.5 12 18.5c1.4 0 2.7-.3 3.8-.8" />
      <path d="M9.9 10.2a3 3 0 0 0 4 4.2" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.2h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  train: (
    <>
      <rect x="5.5" y="3.5" width="13" height="13" rx="3" />
      <path d="M5.5 10.5h13M9 20l-1.5 1.5M15 20l1.5 1.5M9 13.5h.01M15 13.5h.01" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
}

const filled = new Set(['star', 'flame'])

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.6, ...rest }) {
  const shape = paths[name]
  if (!shape) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled.has(name) ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {shape}
    </svg>
  )
}