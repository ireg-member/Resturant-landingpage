import { hoursNote, openingHours } from '../data/site'
import { formatRange, getOpenStatus } from '../lib/hours'
import { useReveal } from '../lib/useReveal'
import Button from './Button'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Hours() {
  const noteRef = useReveal()
  const ctaRef = useReveal()
  const cardRef = useReveal()
  const today = new Date().getDay()
  const status = getOpenStatus()

  return (
    <section
      id="hours"
      className="scroll-mt-16 border-y border-bark-800 bg-bark-900 py-20 text-sand-100 sm:scroll-mt-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Opening hours"
              title="Come by when the fire is lit"
              description="We keep the oven on from late breakfast through late drinks. Walk-ins are welcome at the bar — booking just means you skip the wait."
            />

            <div
              ref={noteRef}
              className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-bark-700 bg-bark-800/60 p-5"
            >
              <span
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  status.isOpen ? 'bg-sage-500/20 text-sage-300' : 'bg-bark-700 text-sand-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage-300' : 'bg-bark-400'}`}
                />
                {status.headline}
              </span>
              <p className="text-sm text-sand-300">{status.detail}</p>
            </div>

            <div ref={ctaRef} className="reveal mt-6">
              <Button href="#contact" variant="primary" className="group w-full sm:w-auto">
                Book a table
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>

          <div
            ref={cardRef}
            className="reveal overflow-hidden rounded-3xl border border-bark-700 bg-bark-800/70 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-4 border-b border-bark-700 px-4 py-5 sm:px-6">
              <h3 className="font-display text-lg text-sand-50">Weekly hours</h3>
              <span className="shrink-0 text-xs font-medium tracking-[0.14em] text-sand-400 uppercase">
                PST
              </span>
            </div>

            <ul className="divide-y divide-bark-700/70">
              {openingHours.map((entry, index) => {
                const isToday = index === today
                return (
                  <li
                    key={entry.day}
                    className={`flex flex-col gap-1 px-4 py-4 text-sm transition sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 ${
                      isToday ? 'bg-clay-500/15' : ''
                    }`}
                  >
                    <span className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="w-8 shrink-0 text-xs font-semibold tracking-wide text-sand-400 uppercase">
                        {entry.short}
                      </span>
                      <span className={isToday ? 'font-semibold text-sand-50' : 'text-sand-200'}>
                        {entry.day}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-clay-500/25 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-clay-300 uppercase">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`shrink-0 tabular-nums sm:text-right ${
                        isToday ? 'font-semibold text-sand-50' : 'text-sand-300'
                      }`}
                    >
                      {formatRange(entry)}
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="border-t border-bark-700 px-4 py-5 text-sm leading-relaxed text-sand-400 sm:px-6">
              {hoursNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}