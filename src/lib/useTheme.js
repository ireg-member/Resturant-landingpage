import { useCallback, useEffect, useState } from 'react'

export const THEME_KEY = 'cedar-salt-theme'

const systemTheme = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const readStored = () => {
  try {
    return localStorage.getItem(THEME_KEY)
  } catch {
    return null
  }
}

const applyTheme = (theme) => {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#17110d' : '#fffcf7')
}

/** Light/dark theme with a system-preference default, persisted to localStorage. */
export function useTheme() {
  const [theme, setTheme] = useState(() => readStored() ?? systemTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Keep following the OS while the visitor has not picked a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(THEME_KEY, next)
      } catch {
        /* private mode — the choice just won't persist */
      }
      return next
    })
  }, [])

  return { theme, isDark: theme === 'dark', toggleTheme }
}