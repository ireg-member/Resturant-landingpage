export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="16" className="fill-bark-900" />
      <path
        d="M32 12c1.8 7.6 9.4 10.4 9.4 19.2 0 3.4-1.5 6.4-3.9 8.4.2-3.6-1.5-6.9-4.6-9.1.3 4.2-1.6 6.6-3.7 8.7-2 2-3.2 4.2-3.2 6.9A10.9 10.9 0 0 0 32 57c6.9 0 12.5-5.4 12.5-12.1 0-6-4-11.3-7.4-15.1C33.4 25.5 31.4 20.6 32 12Z"
        className="fill-clay-400"
      />
      <path
        d="M32 57a8 8 0 0 1-8-8c0-3.2 2-5.4 4-7.4 1.7-1.7 3-3.4 3-6.2 3.6 2.6 6.6 5.6 6.6 10.4A7.8 7.8 0 0 1 32 57Z"
        className="fill-ember-400"
      />
    </svg>
  )
}