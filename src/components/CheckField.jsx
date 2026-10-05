import Icon from './Icon'

/** Styled checkbox with optional inline error. */
export default function CheckField({ id, children, error, className = '', ...rest }) {
  const errorId = `${id}-error`

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-ink-muted"
      >
        <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0">
          <input
            id={id}
            type="checkbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-line-strong bg-card transition checked:border-accent-solid checked:bg-accent-solid hover:border-accent/60"
            {...rest}
          />
          <Icon
            name="check"
            className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 scale-50 text-on-accent opacity-0 transition peer-checked:scale-100 peer-checked:opacity-100"
            strokeWidth={3}
          />
        </span>
        <span>{children}</span>
      </label>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 flex items-center gap-1.5 pl-8 text-xs font-semibold text-accent"
        >
          <Icon name="alert" className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}