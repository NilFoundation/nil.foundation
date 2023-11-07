import React from 'react'
import IntroAnimation, { IntroDescription } from 'components/IntroAnimation'
import { useViewport } from 'hooks/useViewport'
import WhiteRectangle from 'components/WhiteRectangle'
import s from './Intro.module.scss'
import { getAnimatedItemList, animatedItemMobileList } from './data'
import { IntroAnimationProps } from 'components/IntroAnimation/IntroAnimation'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'

const IntroAnimationWidget = ({
  ...props
}: Omit<
  IntroAnimationProps,
  'navigationTitle' | 'navigationLinkText' | 'navigationLink' | 'animatedContainerClassName'
>) => (
  <IntroAnimation
    {...props}
    navigationTitle="Effortless high- performance circuit definition"
    navigationLinkText="Discover zkLLVM"
    navigationLink="https://github.com/NilFoundation/zkllvm"
    animatedContainerClassName={s.animatedContainer}
  />
)

const Intro = () => {
  const { isMobile } = useViewport()
  const prefersReduceMotion = usePrefersReducedMotion()

  return (
    <section className={s.container}>
      {isMobile ? (
        <IntroAnimationWidget key="introMobile" className={s.animationWidgetMobile} items={animatedItemMobileList}>
          {(isVisible: boolean) => (
            <IntroDescription
              className={s.descriptionMobile}
              duration={700}
              delay={500}
              isVisible={isVisible}
              text="Get high-performance circuits straight from C++, Rust, or other mainstream code using this powerful tool designed for developers."
            />
          )}
        </IntroAnimationWidget>
      ) : (
        <IntroAnimationWidget
          key="introDefault"
          className={s.animationWidget}
          items={getAnimatedItemList(prefersReduceMotion)}
        />
      )}
      <WhiteRectangle className={s.underPatternLine} />
    </section>
  )
}

export default Intro
