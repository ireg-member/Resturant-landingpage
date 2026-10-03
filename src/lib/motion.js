import { useEffect, useRef } from 'react'

/** True only for real pointers that are happy with motion (i.e. not touch / reduced-motion). */
const canAnimate = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Attaches pointer-driven 3D tilt to an element by writing CSS custom
 * properties (`--tilt-rx`, `--tilt-ry`, `--glare-x/y`) that the `.tilt`
 * styles in index.css consume. Kept out of React state so a moving pointer
 * never triggers a re-render, and batched through rAF to stay on one frame.
 */
function attachTilt(el, max) {
  if (!canAnimate()) return undefined

  let frame = 0

  const onMove = (event) => {
    if (frame) return
    frame = requestAnimationFrame(() => {
      frame = 0
      const rect = el.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      // -0.5..0.5 from the element centre, mapped to ±max degrees
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--tilt-rx', `${(-y * max * 2).toFixed(2)}deg`)
      el.style.setProperty('--tilt-ry', `${(x * max * 2).toFixed(2)}deg`)
      el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`)
    })
  }

  const onLeave = () => {
    if (frame) {
      cancelAnimationFrame(frame)
      frame = 0
    }
    el.style.setProperty('--tilt-rx', '0deg')
    el.style.setProperty('--tilt-ry', '0deg')
  }

  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)

  return () => {
    if (frame) cancelAnimationFrame(frame)
    el.removeEventListener('pointermove', onMove)
    el.removeEventListener('pointerleave', onLeave)
  }
}

/**
 * Combines the scroll-reveal with the 3D tilt for one element.
 * Pair it with the `reveal tilt` classes; children opt into depth with
 * `tilt__inner` / `tilt__layer` / `tilt__glare`.
 */
export function useTilt3D({ max = 7 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let observer
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
      )
      observer.observe(el)
    }

    const detachTilt = attachTilt(el, max)

    return () => {
      observer?.disconnect()
      detachTilt?.()
    }
  }, [max])

  return ref
}