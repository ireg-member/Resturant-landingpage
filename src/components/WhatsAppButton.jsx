import { whatsappUrl } from '../data/site'
import Icon from './Icon'

/**
 * Floating WhatsApp action button. Collapsed to the glyph on small screens and
 * expands into a labelled pill on hover / keyboard focus. It sits at z-40 so it
 * stays below the fixed navbar (z-50) and drops out of the way when the mobile
 * menu opens.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#25d366] py-3 pr-3 pl-3.5 text-white shadow-lift transition duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-lift active:translate-y-0 sm:right-6 sm:bottom-6"
    >
      <Icon name="whatsapp" className="h-6 w-6 shrink-0" strokeWidth={0} />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[11rem] group-hover:pr-1 group-hover:opacity-100 group-focus-visible:max-w-[11rem] group-focus-visible:pr-1 group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  )
}