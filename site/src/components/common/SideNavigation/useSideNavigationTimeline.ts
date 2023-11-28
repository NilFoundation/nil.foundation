import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useViewport } from 'hooks/useViewport'
import { useRouter } from 'next/router'
import { loaderAllImages } from 'utils/loaderImages'

type Options = {
  onLeave: () => void
  onEnterBack: () => void
}

export const useSideNavigationTimeline = (
  containerRef: React.RefObject<HTMLDivElement>,
  options: Options,
  prefersReducedMotion: boolean,
) => {
  const { isMobile } = useViewport()
  const router = useRouter()
  const timelineRef = useRef<ScrollTrigger | null>(null)

  const [isImagesLoaded, setIsImagesLoaded] = useState(false)

  useEffect(() => {
    const endTrigger = document.querySelector('#footer_nav')

    const images = endTrigger?.querySelectorAll('img')

    if (!images) {
      return
    }

    const arrayFromImages = Array.from(images)

    if (arrayFromImages.every((img) => img.complete)) {
      return
    }

    const imagesSrc = arrayFromImages.filter((item) => !item.complete).map((item) => item.src)

    loaderAllImages(
      imagesSrc,
      () => {
        setIsImagesLoaded(true)
      },
      () => {
        setIsImagesLoaded(true)
      },
    )
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (timelineRef.current && isImagesLoaded) {
      timelineRef.current.refresh()
    }
  }, [isImagesLoaded])

  useEffect(() => {
    const sidebar = containerRef.current

    if (!sidebar || isMobile !== false) {
      return
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      endTrigger: '#footer_nav',
      scrub: true,
      pin: sidebar,
      invalidateOnRefresh: true,
      ...options,
    })

    timelineRef.current = scrollTrigger

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [containerRef, isMobile, options, prefersReducedMotion])

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [router.asPath])
}
