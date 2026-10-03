import { heroDish, heroSecondaryImage, site, stats } from '../data/site'
import { getOpenStatus } from '../lib/hours'
import { useReveal } from '../lib/useReveal'
import { useTilt3D } from '../lib/motion'
import Button from './Button'
import Icon from './Icon'

export default function Hero() {
  const headingRef = useReveal()
  const bodyRef = useReveal()
  const ctaRef = useReveal()
  const statsRef = useReveal()
  const stageRef = useTilt3D({ max: 6 })

  const status = getOpenStatus()

  return (
    <section
      id="top"
      className="grain relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-ember/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <span
            ref={headingRef}
            className="reveal inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-card/80 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-ink-soft"
          >
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 ${
                status.isOpen ? 'bg-sage-soft text-sage' : 'bg-page-soft text-ink-muted'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage' : 'bg-ink-faint'}`}
              />
              {status.headline}
            </span>
            <span className="hidden text-ink-faint sm:inline">{status.detail}</span>
          </span>

          <h1
            ref={bodyRef}
            className="reveal mt-6 text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '80ms' }}
          >
            Slow food, <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-accent to-ember bg-clip-text text-transparent italic">
              wood-fire
            </span>{' '}
            and a very warm welcome.
          </h1>

          <p
            ref={ctaRef}
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
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
            className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8 sm:gap-6"
            style={{ transitionDelay: '320ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl text-ink sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-ink-faint sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={stageRef} className="reveal tilt relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="halo spin-slow pointer-events-none absolute -inset-5 rounded-[3rem] opacity-30 blur-2xl"
            />

            <div className="tilt__inner relative">
              <div className="tilt__layer relative overflow-hidden rounded-[2rem] shadow-lift" style={{ '--layer-z': '10px' }}>
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
                  className="absolute inset-0 bg-linear-to-t from-panel/40 via-transparent to-transparent"
                />
              </div>

              <div
                className="tilt__layer absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/95 p-3 pr-5 shadow-lift backdrop-blur sm:-left-8"
                style={{ '--layer-z': '64px' }}
              >
                <img
                  src={heroSecondaryImage}
                  alt=""
                  aria-hidden="true"
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="font-display text-base leading-tight">{heroDish.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-ink-faint">{heroDish.note}</p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="tilt__layer absolute -top-5 -right-4 hidden rounded-2xl border border-line bg-card/90 px-4 py-3 text-center shadow-lift backdrop-blur sm:block"
                style={{ '--layer-z': '40px' }}
              >
                <div className="flex items-center gap-1 text-ember">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon key={index} name="star" className="h-3.5 w-3.5" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1 text-xs font-semibold text-ink-soft">4.9 · 800+ reviews</p>
              </div>

              <div
                aria-hidden="true"
                className="tilt__glare tilt__layer pointer-events-none absolute inset-0 rounded-[2rem]"
                style={{ '--layer-z': '80px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}