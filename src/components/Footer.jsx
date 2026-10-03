import { navLinks, openingHours, site } from '../data/site'
import { formatRange } from '../lib/hours'
import Logo from './Logo'

const today = new Date().getDay()

export default function Footer() {
  return (
    <footer className="border-t border-panel-line bg-panel text-panel-muted">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-panel-ink">{site.name}</span>
                <span className="mt-1 text-[0.68rem] tracking-[0.16em] text-panel-faint uppercase">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-panel-muted">{site.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-panel-line px-4 py-2 text-xs font-semibold text-panel-ink transition hover:border-accent hover:text-accent-bright"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-panel-faint uppercase">Explore</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-panel-ink transition hover:text-accent-bright">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-panel-faint uppercase">Visit</h2>
            <address className="mt-4 text-sm leading-relaxed text-panel-ink not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
            <ul className="mt-4 flex flex-col gap-1.5 text-sm text-panel-muted">
              <li>
                <a href={site.phoneHref} className="transition hover:text-accent-bright">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition hover:text-accent-bright">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex flex-col gap-1 text-xs text-panel-faint">
              {openingHours.map((entry, index) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className={index === today ? 'font-semibold text-accent-bright' : ''}>
                    {entry.short}
                  </span>
                  <span className="shrink-0 tabular-nums">{formatRange(entry)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-panel-line pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-panel-faint">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-panel-faint">
            Photography via Unsplash · Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}