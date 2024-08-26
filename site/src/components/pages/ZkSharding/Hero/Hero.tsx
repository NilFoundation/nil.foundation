import { useRef, useEffect } from 'react'
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
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { Column } from 'components/Column'

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

      return () => lottieInstance.current?.destroy()
    }
  }, [prefersReduceMotion])

  useIntersectionObserver(
    lottieRef,
    ([entry]) => {
      if (entry.isIntersecting && !isIntersected.current && !prefersReduceMotion && lottieInstance.current) {
        lottieInstance.current.goToAndPlay(650, true)

        isIntersected.current = true
      }
    },
    {
      threshold: 0.5,
    },
  )

  return (
    <div className={cx(s.root, className)}>
      <Column type="left" className={s.left}>
        <HeadingSection className={s.heading} title={title} />
        <div className={s.box}>
          <div className={s.info}>
            <p>{description}</p>
            <p>{info}</p>
          </div>
          {!isMobile && <WhiteRectangle />}
        </div>
      </Column>

      <Column type="right">
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
      </Column>
    </div>
  )
}

export default Hero
