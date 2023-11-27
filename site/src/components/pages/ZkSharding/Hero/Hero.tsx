import { useRef, useEffect } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'
import lottie, { AnimationItem } from 'lottie-web'

import * as animationData from 'lottie/zkSharding.json'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './Hero.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'
import { WebButton } from 'components/WebButton'

type HeroProps = {
  className?: string
  data: typeof zkllvmPageData.hero
}

const Hero = ({ className, data: { title, description, info, list } }: HeroProps) => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<AnimationItem | null>(null)
  const isIntersected = useRef(false)
  const { isMobile } = useViewport()
  const prefersReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (lottieRef.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: !prefersReduceMotion,
        autoplay: false,
        animationData,
      })

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isIntersected.current && !prefersReduceMotion) {
            lottieInstance.current?.goToAndPlay(650, true)

            isIntersected.current = true
          }
        },
        {
          threshold: 0.5,
        },
      )

      observer.observe(lottieRef.current)

      return () => {
        lottieInstance.current?.destroy()
        observer.disconnect()
      }
    }
  }, [prefersReduceMotion])

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <HeadingSection className={s.heading} title={title} />
        <div className={s.box}>
          <div className={s.info}>
            <p>{description}</p>
            <p>{info}</p>
          </div>
          {!isMobile && <WhiteRectangle />}
        </div>
      </div>

      <div className={s.right}>
        <div className={s.contentWrapper}>
          <div className={s.lottieWrapper} ref={lottieRef} />
        </div>
        <div className={s.rightFooter}>
          <div className={s.footerLeftBox}>
            <div className={s.buttonWrapper}>
              <WebButton className={s.link} href="https://nil.foundation/blog/post/nil_zkSharding">
                Learn more
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

export default Hero
