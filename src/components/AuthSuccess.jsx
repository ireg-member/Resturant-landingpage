import Icon from './Icon'

/** Confirmation panel shown in place of a form once the request "succeeds". */
export default function AuthSuccess({ title, body, children }) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-card-alt p-6 sm:p-7">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft text-sage">
        <Icon name="check" className="h-5 w-5" strokeWidth={2.2} />
      </span>

      <div>
        <h2 className="text-xl leading-tight sm:text-2xl">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{body}</p>
      </div>

      {children}
    </div>
  )
}