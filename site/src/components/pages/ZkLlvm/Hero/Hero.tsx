import { useRef, useEffect } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'
import lottie, { AnimationItem } from 'lottie-web'

import * as animationData from 'lottie/zklm.json'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import ListItem from 'components/ListItem'

import s from './Hero.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'

type HeroProps = {
  className?: string
  data: typeof zkllvmPageData.hero
}

const Hero = ({ className, data: { title, description, info, list } }: HeroProps) => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<AnimationItem | null>(null)
  const { isMobile } = useViewport()
  const prefersReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (lottieRef.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: !prefersReduceMotion,
        autoplay: !prefersReduceMotion,
        animationData,
      })

      lottieInstance.current.goToAndPlay(1000, true)

      return () => lottieInstance.current?.destroy()
    }
  }, [prefersReduceMotion])

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <HeadingSection className={s.heading} title={title} />
        <div className={s.heroDescription}>
          <p>{description}</p>
        </div>
        <div className={s.box}>
          {!isMobile && <WhiteRectangle className={s.line} />}
          <div className={s.info}>
            <p className={s.descriptionMobile}>{description}</p>
            <p>{info}</p>
            {!isMobile && <WhiteRectangle />}
          </div>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.lottieWrapper} ref={lottieRef} />
        <div className={s.list}>
          {list.map((el) => (
            <ListItem className={s.item} key={el} title={el} />
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

export default Hero
