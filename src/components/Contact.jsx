import { directionsUrl, mapEmbedUrl, site } from '../data/site'
import { useReveal } from '../lib/useReveal'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const details = [
  {
    icon: 'mapPin',
    label: 'Find us',
    value: `${site.address.line1}, ${site.address.line2}`,
    href: directionsUrl,
    external: true,
  },
  { icon: 'phone', label: 'Call us', value: site.phone, href: site.phoneHref },
  { icon: 'mail', label: 'Email', value: site.email, href: site.emailHref },
  { icon: 'train', label: 'Getting here', value: site.transitNote },
]

export default function Contact() {
  const detailsRef = useReveal()
  const mapRef = useReveal()

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit us"
          title="Come sit with us"
          description="Tucked onto Division Street, with a bike rack out front and the streetcar two minutes away."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <ul ref={detailsRef} className="reveal flex flex-col gap-3">
            {details.map((item) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-clay-100 text-clay-600">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs font-semibold tracking-[0.14em] text-bark-500 uppercase">
                      {item.label}
                    </span>
                    <span className="mt-1 text-sm leading-relaxed break-words text-bark-800">
                      {item.value}
                    </span>
                  </span>
                </>
              )

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-clay-200 hover:shadow-lift"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-white p-5 shadow-soft">
                      {content}
                    </div>
                  )}
                </li>
              )
            })}

            <li className="mt-1 rounded-2xl bg-clay-100/70 p-5">
              <p className="text-sm leading-relaxed text-bark-700">
                <span className="font-semibold text-clay-700">Groups of 7+?</span>{' '}
                Email{' '}
                <a
                  href={`mailto:${site.reservationEmail}`}
                  className="font-semibold underline decoration-clay-300 underline-offset-4 hover:decoration-clay-600"
                >
                  {site.reservationEmail}
                </a>{' '}
                and we&rsquo;ll set the long table aside for you.
              </p>
            </li>
          </ul>

          <div
            ref={mapRef}
            className="reveal relative min-h-[22rem] overflow-hidden rounded-3xl border border-sand-200 shadow-soft"
            style={{ transitionDelay: '120ms' }}
          >
            <iframe
              title={`Map showing ${site.name}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-bark-900 px-4 py-2.5 text-xs font-semibold text-sand-50 shadow-lift transition hover:bg-bark-800"
            >
              Get directions
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}