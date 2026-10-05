import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Form state for the auth screens. Runs the validators on submit, marks the
 * offending fields, focuses the first one and fakes the request round-trip —
 * there is no backend behind these forms yet, so the caller supplies the rules
 * and this just owns the UI lifecycle (idle → loading → done).
 */
export function useAuthForm({ initialValues, rules, namespace, delay = 900 }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // Field name -> change handler. Clears the error as soon as the visitor
  // starts fixing it, so the message never fights the cursor.
  const fieldValue = useCallback(
    (key) => (event) => {
      const target = event.target
      const next = target.type === 'checkbox' ? target.checked : target.value
      setValues((current) => ({ ...current, [key]: next }))
      setErrors((current) => (current[key] ? { ...current, [key]: '' } : current))
    },
    [],
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    const next = {}
    for (const [key, rule] of Object.entries(rules)) {
      next[key] = rule(values[key], values)
    }

    const invalid = Object.entries(next).filter(([, message]) => message)
    if (invalid.length > 0) {
      setErrors(next)
      document.getElementById(`${namespace}-${invalid[0][0]}`)?.focus()
      return
    }

    setErrors({})
    setStatus('loading')
    timer.current = window.setTimeout(() => setStatus('done'), delay)
  }

  const restart = useCallback(() => {
    window.clearTimeout(timer.current)
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }, [initialValues])

  return { values, errors, status, fieldValue, handleSubmit, restart }
}