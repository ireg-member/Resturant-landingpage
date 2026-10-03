import { useState } from 'react'
import { dishes, menuCategories } from '../data/site'
import { useTilt3D } from '../lib/motion'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function DishCard({ dish, index }) {
  const ref = useTilt3D({ max: 7 })

  return (
    <article
      ref={ref}
      className="reveal tilt group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-colors duration-300 hover:border-accent"
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="tilt__inner flex flex-1 flex-col rounded-3xl">
        <div className="tilt__layer relative overflow-hidden" style={{ '--layer-z': '26px' }}>
          <img
            src={dish.image}
            alt={dish.alt}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
          />
          <span className="absolute top-4 right-4 rounded-full bg-panel px-3 py-1 text-sm font-semibold text-panel-ink shadow-soft">
            ${dish.price}
          </span>
          {dish.tags[0] && (
            <span className="absolute bottom-4 left-4 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-accent shadow-soft">
              {dish.tags[0]}
            </span>
          )}
        </div>

        <div className="tilt__layer flex flex-1 flex-col gap-2 p-5" style={{ '--layer-z': '12px' }}>
          <h3 className="text-lg leading-snug">{dish.name}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">{dish.description}</p>
          {dish.tags.length > 1 && (
            <p className="mt-auto pt-3 text-xs font-medium tracking-wide text-sage uppercase">
              {dish.tags.slice(1).join(' · ')}
            </p>
          )}
        </div>

        <div
          aria-hidden="true"
          className="tilt__glare tilt__layer pointer-events-none absolute inset-0 rounded-3xl"
          style={{ '--layer-z': '40px' }}
        />
      </div>
    </article>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...menuCategories]
  const visible = active === 'All' ? dishes : dishes.filter((dish) => dish.category === active)

  return (
    <section
      id="menu"
      className="scroll-mt-16 border-y border-line bg-page-soft py-20 sm:scroll-mt-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Popular dishes"
          title="The dishes people come back for"
          description="A short menu that changes with the market. These are the plates our regulars order every single week."
        />

        <div
          role="group"
          aria-label="Filter dishes by course"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => {
            const isActive = category === active
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:py-2 ${
                  isActive
                    ? 'border-ink bg-ink text-page'
                    : 'border-line-strong bg-card/70 text-ink-muted hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-ink-faint">
            Full tasting menu, wine list and allergy notes available on request.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Ask about the full menu
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}