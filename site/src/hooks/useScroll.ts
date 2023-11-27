import { useCallback } from 'react'

export const useScroll = () => {
  const scrollToTop = () =>
    new Promise((resolve) => {
      window.scrollTo(0, 0)
      resolve(true)
    })

  const scrollTo = (target: string | HTMLElement) =>
    new Promise((resolve) => {
      let element

      if (typeof target === 'string') {
        element = document.querySelector(target)
      }

      !!element &&
        element.scrollIntoView({
          behavior: 'smooth',
        })

      setTimeout(() => {
        resolve(true)
      })
    })

  const disableScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.marginRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    }
  }

  const enableScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'inherit'
      document.body.style.marginRight = '0'
    }
  }, [])

  return { scrollTo, disableScroll, enableScroll, scrollToTop }
}
