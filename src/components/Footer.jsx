import { navLinks, openingHours, site } from '../data/site'
import { formatRange } from '../lib/hours'
import Logo from './Logo'

const today = new Date().getDay()

export default function Footer() {
  return (
    <footer className="border-t border-bark-800 bg-bark-900 text-sand-200">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-sand-50">{site.name}</span>
                <span className="mt-1 text-[0.68rem] tracking-[0.16em] text-bark-400 uppercase">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bark-300">{site.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bark-700 px-4 py-2 text-xs font-semibold text-sand-200 transition hover:border-clay-400 hover:text-clay-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-bark-400 uppercase">Explore</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sand-200 transition hover:text-clay-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-bark-400 uppercase">Visit</h2>
            <address className="mt-4 text-sm leading-relaxed text-sand-200 not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
            <ul className="mt-4 flex flex-col gap-1.5 text-sm text-bark-300">
              <li>
                <a href={site.phoneHref} className="transition hover:text-clay-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition hover:text-clay-300">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex flex-col gap-1 text-xs text-bark-400">
              {openingHours.map((entry, index) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className={index === today ? 'font-semibold text-clay-300' : ''}>
                    {entry.short}
                  </span>
                  <span className="shrink-0 tabular-nums">{formatRange(entry)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bark-800 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-bark-400">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-bark-400">
            Photography via Unsplash · Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}