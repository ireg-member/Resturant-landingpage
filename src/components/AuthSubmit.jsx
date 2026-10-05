/** Primary submit button for the auth forms, with an in-place loading state. */
export default function AuthSubmit({ loading = false, children, className = '' }) {
  return (
    <button
      type="submit"
      disabled={loading}
      aria-busy={loading}
      className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent-solid px-6 py-3.5 text-sm font-semibold text-on-accent shadow-soft transition duration-200 hover:bg-accent-hover hover:shadow-lift active:translate-y-px active:shadow-none disabled:pointer-events-none disabled:opacity-75 ${className}`}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-on-accent/40 border-t-on-accent"
        />
      )}
      {children}
    </button>
  )
}