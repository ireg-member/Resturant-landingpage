import { aboutImages, highlights, site } from '../data/site'
import { useReveal } from '../lib/useReveal'
import Button from './Button'
import Icon from './Icon'

export default function About() {
  const imageRef = useReveal()
  const badgeRef = useReveal()
  const headingRef = useReveal()
  const copyRef = useReveal()
  const listRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section id="about" className="scroll-mt-16 py-20 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 -left-4 hidden h-full w-full rounded-[2rem] border border-clay-200 sm:block"
          />
          <div ref={imageRef} className="reveal relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={aboutImages.main}
              alt="Diners seated at a warmly lit table inside Cedar & Salt"
              width="1000"
              height="1200"
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover sm:aspect-5/4 lg:aspect-4/5"
            />
          </div>

          <div
            ref={badgeRef}
            className="reveal absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-sand-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:left-8"
            style={{ transitionDelay: '160ms' }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-100 text-clay-600">
              <Icon name="flame" className="h-5 w-5" strokeWidth={0} />
            </span>
            <div>
              <p className="font-display text-base leading-tight text-bark-900">
                Family-run since {site.founded}
              </p>
              <p className="mt-0.5 text-xs text-bark-500">Third generation, same corner</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:pt-6">
          <div ref={headingRef} className="reveal">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-clay-600 uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-clay-300" />
              Our story
            </span>
            <h2 className="mt-4 text-3xl leading-[1.15] text-balance sm:text-4xl">
              A neighbourhood room built around the fire
            </h2>
          </div>

          <div ref={copyRef} className="reveal mt-6 flex flex-col gap-4 text-base leading-relaxed text-bark-600" style={{ transitionDelay: '80ms' }}>
            <p>
              We opened {site.name} in {site.founded} with one wood oven, twelve seats and a stubborn
              belief that the best meals are the ones that happen slowly. The room got bigger; the
              idea never changed.
            </p>
            <p>
              Everything we serve starts within 150 miles of the door. Bread is baked twice a day,
              pasta is rolled every morning, and the menu board is rewritten whenever the farms send
              us something too good to ignore.
            </p>
          </div>

          <ul ref={listRef} className="reveal mt-9 flex flex-col gap-5" style={{ transitionDelay: '160ms' }}>
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-bark-900">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-bark-600">{item.copy}</p>
                </div>
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="reveal mt-10" style={{ transitionDelay: '240ms' }}>
            <Button href="#menu" variant="outline" className="group">
              Read the full menu
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}