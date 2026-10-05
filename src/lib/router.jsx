import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const RouterContext = createContext(null)

const readPath = () => (typeof window === 'undefined' ? '/' : window.location.pathname)

/**
 * Minimal history-based router. The landing page uses in-page anchors, so the
 * only thing missing for the auth screens is swapping the rendered view at a
 * real URL — no need for a routing library.
 */
export function Router({ children }) {
  const [path, setPath] = useState(readPath)

  useEffect(() => {
    const onPopState = () => setPath(readPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to) => {
    if (to === readPath()) return
    window.history.pushState(null, '', to)
    setPath(to)
  }, [])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const router = useContext(RouterContext)
  if (!router) throw new Error('useRouter must be used inside <Router>')
  return router
}

/**
 * An anchor that still behaves like an anchor — middle-click, cmd-click and
 * "copy link address" all work — but navigates in-app when it is a plain
 * left-click on the same tab.
 */
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter()

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.button !== 0) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (rest.target && rest.target !== '_self') return
        event.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}