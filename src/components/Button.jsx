const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200'

const variants = {
  primary: 'bg-clay-600 text-sand-50 hover:bg-clay-700 active:bg-clay-700 shadow-soft hover:shadow-lift',
  dark: 'bg-bark-900 text-sand-100 hover:bg-bark-800 shadow-soft hover:shadow-lift',
  outline: 'border border-bark-300/80 bg-white/70 text-bark-800 hover:border-clay-400 hover:text-clay-700',
  ghost: 'text-bark-700 hover:text-clay-700 underline decoration-clay-300 underline-offset-8 hover:decoration-clay-500',
}

export default function Button({ as = 'a', variant = 'primary', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}