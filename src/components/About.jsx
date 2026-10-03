import { aboutImages, highlights, site } from '../data/site'
import { useReveal } from '../lib/useReveal'
import Button from './Button'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function About() {
  const imageRef = useReveal()
  const badgeRef = useReveal()
  const copyRef = useReveal()
  const listRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section id="about" className="scroll-mt-16 py-20 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 -left-4 hidden h-full w-full rounded-[2rem] border border-line-strong sm:block"
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
            className="reveal absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/95 px-5 py-4 shadow-soft backdrop-blur sm:left-8"
            style={{ transitionDelay: '160ms' }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon name="flame" className="h-5 w-5" strokeWidth={0} />
            </span>
            <div className="min-w-0">
              <p className="font-display text-base leading-tight">
                Family-run since {site.founded}
              </p>
              <p className="mt-0.5 text-xs text-ink-faint">Third generation, same corner</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:pt-6">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="A neighbourhood room built around the fire"
          />

          <div
            ref={copyRef}
            className="reveal mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink-muted"
            style={{ transitionDelay: '80ms' }}
          >
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
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-soft text-sage">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
                </div>
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="reveal mt-10 w-full sm:w-auto" style={{ transitionDelay: '240ms' }}>
            <Button href="#menu" variant="outline" className="group w-full sm:w-auto">
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