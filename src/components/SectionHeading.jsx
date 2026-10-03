import { useReveal } from '../lib/useReveal'

const tones = {
  light: {
    eyebrow: 'text-accent',
    rule: 'bg-accent',
    title: 'text-ink',
    body: 'text-ink-muted',
  },
  dark: {
    eyebrow: 'text-accent-bright',
    rule: 'bg-accent-bright',
    title: 'text-panel-ink',
    body: 'text-panel-muted',
  },
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const ref = useReveal()
  const t = tones[tone] ?? tones.light
  const centered = align === 'center'

  return (
    <div
      ref={ref}
      className={`reveal flex max-w-2xl flex-col gap-4 ${
        centered ? 'mx-auto items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${t.eyebrow}`}
        >
          <span aria-hidden="true" className={`h-px w-6 ${t.rule}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem] ${t.title}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed text-pretty sm:text-lg ${t.body}`}>{description}</p>
      )}
    </div>
  )
}