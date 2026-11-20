import { useEffect, useRef } from 'react'

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        if (options.once !== false) observer.unobserve(element)
      }
    }, { threshold: options.threshold ?? 0.15 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.once, options.threshold])

  return ref
}
