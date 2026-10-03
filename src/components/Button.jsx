const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 active:translate-y-px'

const variants = {
  primary:
    'bg-accent-solid text-on-accent shadow-soft hover:bg-accent-hover hover:shadow-lift active:shadow-none',
  outline:
    'border border-line-strong bg-card/70 text-ink shadow-soft hover:border-accent hover:text-accent active:shadow-none',
  ghost: 'text-ink-soft hover:text-accent underline decoration-accent/40 underline-offset-8 hover:decoration-accent',
}

export default function Button({ as = 'a', variant = 'primary', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}