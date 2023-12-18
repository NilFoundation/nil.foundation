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
import { Column } from 'components/Column'

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
      <Column type="left" className={s.left}>
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
      </Column>

      <Column type="right" className={s.right}>
        <div className={s.lottieWrapper} ref={lottieRef} />
        <div className={s.list}>
          {list.map((el) => (
            <ListItem classNameTitle={s.itemTitle} className={s.item} key={el} title={el} />
          ))}
        </div>
        <WhiteRectangle />
      </Column>
    </div>
  )
}

export default Hero
