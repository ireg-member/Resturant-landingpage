import { useReveal } from '../lib/useReveal'

const alignments = {
  left: 'text-left items-start',
  center: 'text-center items-center mx-auto',
}

const tones = {
  light: {
    eyebrow: 'text-clay-600',
    rule: 'bg-clay-300',
    title: 'text-bark-900',
    body: 'text-bark-600',
  },
  dark: {
    eyebrow: 'text-clay-300',
    rule: 'bg-clay-400',
    title: 'text-sand-50',
    body: 'text-sand-300',
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

  return (
    <div ref={ref} className={`reveal flex max-w-2xl flex-col gap-4 ${alignments[align]} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${t.eyebrow}`}>
          <span aria-hidden="true" className={`h-px w-6 ${t.rule}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem] ${t.title}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${t.body}`}>{description}</p>
      )}
    </div>
  )
}