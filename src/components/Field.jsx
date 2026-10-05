import { useId, useState } from 'react'
import Icon from './Icon'

/**
 * Labelled form field with a leading icon, inline error and a show/hide toggle
 * for password inputs. Errors are wired to the input with `aria-describedby`
 * and announced via `role="alert"`.
 */
export default function Field({
  label,
  icon,
  error,
  hint,
  footer,
  id,
  type = 'text',
  ...rest
}) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const errorId = `${fieldId}-error`
  const helpId = `${fieldId}-hint`
  const [revealed, setRevealed] = useState(false)

  const isPassword = type === 'password'
  const describedBy = [error ? errorId : null, !error && hint ? helpId : null]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-semibold text-ink">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <Icon
            name={icon}
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-ink-faint"
          />
        )}

        <input
          id={fieldId}
          type={isPassword && revealed ? 'text' : type}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          className={`w-full rounded-2xl border bg-card py-3.5 text-sm text-ink transition placeholder:text-ink-faint/80 focus:border-accent focus:ring-4 focus:ring-accent/12 focus:outline-none ${
            icon ? 'pl-11' : 'pl-4'
          } ${isPassword ? 'pr-12' : 'pr-4'} ${
            error ? 'border-accent' : 'border-line-strong hover:border-accent/60'
          }`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((current) => !current)}
            aria-label={revealed ? 'Hide password' : 'Show password'}
            aria-pressed={revealed}
            className="absolute top-1/2 right-2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-ink-faint transition hover:bg-page-soft hover:text-accent"
          >
            <Icon name={revealed ? 'eyeOff' : 'eye'} className="h-4 w-4" />
          </button>
        )}
      </div>

      {footer}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-semibold text-accent"
        >
          <Icon name="alert" className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p id={helpId} className="text-xs leading-relaxed text-ink-faint">
          {hint}
        </p>
      ) : null}
    </div>
  )
}