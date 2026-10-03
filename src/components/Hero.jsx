import { heroDish, heroSecondaryImage, site, stats } from '../data/site'
import { getOpenStatus } from '../lib/hours'
import { useReveal } from '../lib/useReveal'
import Button from './Button'
import Icon from './Icon'

export default function Hero() {
  const headingRef = useReveal()
  const bodyRef = useReveal()
  const ctaRef = useReveal()
  const statsRef = useReveal()
  const imageRef = useReveal()
  const cardRef = useReveal()

  const status = getOpenStatus()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-clay-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-ember-300/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <span
            ref={headingRef}
            className="reveal inline-flex items-center gap-2 rounded-full border border-clay-200 bg-white/80 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-bark-700"
          >
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
                status.isOpen ? 'bg-sage-100 text-sage-600' : 'bg-sand-200 text-bark-600'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage-500' : 'bg-bark-400'}`}
              />
              {status.headline}
            </span>
            <span className="hidden text-bark-500 sm:inline">{status.detail}</span>
          </span>

          <h1
            ref={bodyRef}
            className="reveal mt-6 text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '80ms' }}
          >
            Slow food, <br className="hidden sm:block" />
            <span className="text-clay-600 italic">wood-fire</span> and a very warm welcome.
          </h1>

          <p
            ref={ctaRef}
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-bark-600"
            style={{ transitionDelay: '160ms' }}
          >
            {site.description} Come hungry, stay late — the wine list is longer than the menu.
          </p>

          <div
            ref={statsRef}
            className="reveal mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            style={{ transitionDelay: '240ms' }}
          >
            <Button href="#contact" className="group w-full sm:w-auto">
              Book a table
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
            <Button href="#menu" variant="outline" className="w-full sm:w-auto">
              See the menu
            </Button>
          </div>

          <dl
            className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-sand-200 pt-8 sm:gap-6"
            style={{ transitionDelay: '320ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl text-bark-900 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-bark-500 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              ref={imageRef}
              className="reveal relative overflow-hidden rounded-[2rem] shadow-lift"
              style={{ transitionDelay: '120ms' }}
            >
              <img
                src={heroDish.image}
                alt={heroDish.alt}
                width="1200"
                height="1500"
                fetchPriority="high"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bark-900/35 via-transparent to-transparent"
              />
            </div>

            <div
              ref={cardRef}
              className="reveal absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-sand-200 bg-white/95 p-3 pr-5 shadow-soft backdrop-blur sm:-left-8"
              style={{ transitionDelay: '320ms' }}
            >
              <img
                src={heroSecondaryImage}
                alt=""
                aria-hidden="true"
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-base leading-tight text-bark-900">{heroDish.name}</p>
                <p className="mt-0.5 text-xs font-medium text-bark-500">{heroDish.note}</p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-5 -right-4 hidden rounded-2xl border border-sand-200 bg-white/90 px-4 py-3 text-center shadow-soft backdrop-blur sm:block"
            >
              <div className="flex items-center gap-1 text-ember-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon key={index} name="star" className="h-3.5 w-3.5" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-bark-700">4.9 · 800+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}