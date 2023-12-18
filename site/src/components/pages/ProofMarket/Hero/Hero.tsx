import { useRef, useEffect } from 'react'
import cx from 'classnames'
import lottie, { AnimationItem } from 'lottie-web'

import * as animationData from 'lottie/proof.json'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './Hero.module.scss'
import { homePageData } from 'stubs/homePageData'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'
import { Column } from 'components/Column'

type HeroProps = {
  className?: string
  data: typeof homePageData.hero
}

const Hero = ({ className, data: { title, description } }: HeroProps) => {
  const lottieRef = useRef<HTMLDivElement | null>(null)
  const lottieInstance = useRef<AnimationItem | null>(null)
  const { isMobile } = useViewport()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (lottieRef.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: !prefersReducedMotion,
        autoplay: !prefersReducedMotion,
        animationData,
      })

      return () => lottieInstance.current?.destroy()
    }
  }, [prefersReducedMotion])

  return (
    <div className={cx(s.root, className)}>
      <Column type="left" className={s.left}>
        <HeadingSection className={s.heading} title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </Column>
      <Column type="right" className={s.right}>
        <div className={s.lottieWrapper} ref={lottieRef} />
        <WhiteRectangle />
      </Column>
    </div>
  )
}

export default Hero
