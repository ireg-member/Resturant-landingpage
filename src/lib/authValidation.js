/**
 * Client-side field rules for the auth screens. Each validator returns an
 * error message, or an empty string when the value is acceptable, so a form
 * can map straight over its fields.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const MIN_PASSWORD_LENGTH = 8

export function nameRule(value) {
  const trimmed = value.trim()
  if (trimmed.length < 2) return 'Tell us your name'
  if (trimmed.length > 60) return 'That name is a little too long'
  return ''
}

export function emailRule(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required'
  if (!EMAIL.test(trimmed)) return 'Enter a valid email address'
  return ''
}

export function passwordRule(value) {
  if (!value) return 'Password is required'
  if (value.length < MIN_PASSWORD_LENGTH) return `Use at least ${MIN_PASSWORD_LENGTH} characters`
  return ''
}

export function confirmRule(value, password) {
  if (!value) return 'Confirm your password'
  if (value !== password) return 'Passwords do not match'
  return ''
}

export function requiredRule(message) {
  return (value) => (value ? '' : message)
}

const STRENGTH_LABELS = ['Too short', 'Weak', 'Fair', 'Good', 'Strong']

/** Rough 0–4 score plus a label, used to drive the meter under the password field. */
export function passwordStrength(value) {
  if (!value) return { score: 0, label: STRENGTH_LABELS[0] }

  let points = 0
  if (value.length >= MIN_PASSWORD_LENGTH) points += 1
  if (value.length >= 12) points += 1
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) points += 1
  if (/\d/.test(value)) points += 1
  if (/[^\w\s]/.test(value)) points += 1

  const score = Math.min(points, 4)
  return { score, label: STRENGTH_LABELS[score] }
}