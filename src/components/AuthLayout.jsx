import { authPanel, site } from '../data/site'
import { Link } from '../lib/router'
import Icon from './Icon'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

/**
 * Split-screen shell shared by the login and sign-up screens: form on the left,
 * a look at the room on the right. It carries its own minimal header so the
 * landing page's anchor navigation is never stranded on a dead page.
 */
export default function AuthLayout({ eyebrow, title, description, children, footer }) {
  return (
    <div className="grain relative flex min-h-screen flex-col overflow-x-clip bg-page-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 h-[26rem] w-[26rem] rounded-full bg-ember/15 blur-3xl"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold">{site.name}</span>
            <span className="mt-0.5 hidden text-[0.68rem] tracking-[0.16em] text-ink-faint uppercase sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-card hover:text-accent sm:inline-flex"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            Back to site
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-5xl flex-1 items-center px-5 py-8 sm:px-8 sm:py-12">
        <div className="grid w-full overflow-hidden rounded-3xl border border-line bg-card shadow-lift lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-accent" />
              {eyebrow}
            </span>

            <h1 className="mt-4 text-3xl leading-[1.1] text-balance sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              {description}
            </p>

            <div className="mt-8">{children}</div>

            {footer && <div className="mt-8 border-t border-line pt-6">{footer}</div>}
          </div>

          <aside className="relative hidden overflow-hidden lg:block">
            <img
              src={authPanel.image}
              alt={authPanel.alt}
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-panel/95 via-panel/65 to-panel/30"
            />

            <div className="relative flex h-full flex-col justify-end p-10 text-panel-ink xl:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-panel-ink/12 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                <Icon name="flame" className="h-3.5 w-3.5 text-ember" strokeWidth={0} />
                Members eat first
              </span>

              <h2 className="mt-5 text-2xl leading-tight text-balance text-panel-ink xl:text-[1.75rem]">
                {authPanel.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-panel-muted">{authPanel.copy}</p>

              <ul className="mt-7 flex flex-col gap-3">
                {authPanel.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm leading-snug text-panel-ink">
                    <span className="mt-px inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/30">
                      <Icon name="check" className="h-3 w-3 text-accent-bright" strokeWidth={2.6} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}