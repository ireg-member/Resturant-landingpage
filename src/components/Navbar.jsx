import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { getOpenStatus } from '../lib/hours'
import Button from './Button'
import Icon from './Icon'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const status = getOpenStatus()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // The panel is hidden at `lg`, so close it if the viewport grows past that
  // (otherwise the body would stay scroll-locked on desktop).
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const onChange = (event) => event.matches && setOpen(false)
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-sand-200/80 bg-sand-50/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-bark-900">{site.name}</span>
            <span className="mt-0.5 hidden text-[0.68rem] tracking-[0.16em] text-bark-500 uppercase sm:block">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-bark-700 transition hover:bg-sand-200/70 hover:text-clay-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
              status.isOpen ? 'bg-sage-100 text-sage-600' : 'bg-sand-200 text-bark-600'
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage-500' : 'bg-bark-400'}`}
            />
            {status.headline}
          </span>
          <Button href="#contact" className="px-5 py-2.5">
            Book a table
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 bg-white/70 text-bark-800 transition hover:border-clay-300 hover:text-clay-700 lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-sand-200 bg-sand-50 lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-lg font-medium text-bark-800 transition hover:bg-sand-200/70"
            >
              {link.label}
              <Icon name="arrowUpRight" className="h-4 w-4 text-bark-400" />
            </a>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-sand-200 pt-5">
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                status.isOpen ? 'bg-sage-100 text-sage-600' : 'bg-sand-200 text-bark-600'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage-500' : 'bg-bark-400'}`}
              />
              {status.headline} · {status.detail}
            </span>
            <Button href="#contact" onClick={() => setOpen(false)} className="w-full">
              Book a table
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
              className="text-center text-sm font-medium text-bark-600 hover:text-clay-700"
            >
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}