import { useState } from 'react'
import { dishes, menuCategories } from '../data/site'
import { useReveal } from '../lib/useReveal'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function DishCard({ dish, index }) {
  const ref = useReveal()

  return (
    <article
      ref={ref}
      className="reveal group flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-clay-200 hover:shadow-lift"
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={dish.image}
          alt={dish.alt}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="aspect-4/3 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 right-4 rounded-full bg-bark-900/85 px-3 py-1 text-sm font-semibold text-sand-50 backdrop-blur">
          ${dish.price}
        </span>
        {dish.tags[0] && (
          <span className="absolute bottom-4 left-4 rounded-full bg-sand-50/95 px-3 py-1 text-xs font-semibold text-clay-700 shadow-soft">
            {dish.tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg leading-snug">{dish.name}</h3>
        <p className="text-sm leading-relaxed text-bark-600">{dish.description}</p>
        {dish.tags.length > 1 && (
          <p className="mt-auto pt-3 text-xs font-medium tracking-wide text-sage-600 uppercase">
            {dish.tags.slice(1).join(' · ')}
          </p>
        )}
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
      className="scroll-mt-16 border-y border-sand-200 bg-sand-100/60 py-20 sm:scroll-mt-24 sm:py-28"
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
                    ? 'border-bark-900 bg-bark-900 text-sand-50'
                    : 'border-sand-300 bg-white/70 text-bark-600 hover:border-clay-300 hover:text-clay-700'
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
          <p className="text-sm text-bark-500">
            Full tasting menu, wine list and allergy notes available on request.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-clay-700 hover:text-clay-600"
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