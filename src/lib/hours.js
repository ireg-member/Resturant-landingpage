import { openingHours } from '../data/site'

const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/** "22:00" -> "10:00 pm" */
export function formatTime(time) {
  const [hours, minutes] = time.split(':').map(Number)
  const suffix = hours >= 12 ? 'pm' : 'am'
  const twelve = hours % 12 === 0 ? 12 : hours % 12
  return `${twelve}:${String(minutes).padStart(2, '0')} ${suffix}`
}

export function formatRange(entry) {
  if (!entry || entry.closed) return 'Closed'
  return `${formatTime(entry.open)} – ${formatTime(entry.close)}`
}

/**
 * Live open/closed state for the current day.
 * Returns `{ isOpen, headline, detail }` ready to render.
 */
export function getOpenStatus(now = new Date()) {
  const today = openingHours[now.getDay()]
  const current = now.getHours() * 60 + now.getMinutes()

  if (!today || today.closed) {
    return { isOpen: false, headline: 'Closed today', detail: 'See you tomorrow' }
  }

  const opens = toMinutes(today.open)
  const closes = toMinutes(today.close)

  if (current < opens) {
    return {
      isOpen: false,
      headline: 'Closed right now',
      detail: `Opens today at ${formatTime(today.open)}`,
    }
  }

  if (current >= closes) {
    const tomorrow = openingHours[(now.getDay() + 1) % 7]
    return {
      isOpen: false,
      headline: 'Closed right now',
      detail: tomorrow?.closed
        ? 'See you soon'
        : `Opens tomorrow at ${formatTime(tomorrow.open)}`,
    }
  }

  return {
    isOpen: true,
    headline: 'Open now',
    detail: `Kitchen closes at ${formatTime(today.close)}`,
  }
}