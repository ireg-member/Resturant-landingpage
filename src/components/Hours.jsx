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
      className="scroll-mt-16 border-y border-panel-line bg-panel py-20 text-panel-muted sm:scroll-mt-24 sm:py-28"
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
              className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-panel-line bg-panel-2 p-5"
            >
              <span
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  status.isOpen ? 'bg-sage-soft text-sage' : 'bg-panel-line text-panel-ink'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? 'bg-sage' : 'bg-panel-faint'}`}
                />
                {status.headline}
              </span>
              <p className="text-sm text-panel-muted">{status.detail}</p>
            </div>

            <div ref={ctaRef} className="reveal mt-6 w-full sm:w-auto">
              <Button href="#contact" className="group w-full sm:w-auto">
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
            className="reveal overflow-hidden rounded-3xl border border-panel-line bg-panel-2"
          >
            <div className="flex items-center justify-between gap-4 border-b border-panel-line px-4 py-5 sm:px-6">
              <h3 className="font-display text-lg text-panel-ink">Weekly hours</h3>
              <span className="shrink-0 text-xs font-medium tracking-[0.14em] text-panel-faint uppercase">
                PST
              </span>
            </div>

            <ul className="divide-y divide-panel-line">
              {openingHours.map((entry, index) => {
                const isToday = index === today
                return (
                  <li
                    key={entry.day}
                    className={`flex flex-col gap-1 px-4 py-4 text-sm transition sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 ${
                      isToday ? 'bg-accent-soft' : ''
                    }`}
                  >
                    <span className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="w-8 shrink-0 text-xs font-semibold tracking-wide text-panel-faint uppercase">
                        {entry.short}
                      </span>
                      <span className={isToday ? 'font-semibold text-panel-ink' : 'text-panel-muted'}>
                        {entry.day}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-accent-solid/20 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent-bright uppercase">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`shrink-0 tabular-nums sm:text-right ${
                        isToday ? 'font-semibold text-panel-ink' : 'text-panel-muted'
                      }`}
                    >
                      {formatRange(entry)}
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="border-t border-panel-line px-4 py-5 text-sm leading-relaxed text-panel-faint sm:px-6">
              {hoursNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}