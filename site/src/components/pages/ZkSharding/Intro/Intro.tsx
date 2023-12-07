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
    navigationTitle="zkSharding for Ethereum"
    navigationLinkText="Explore =nil;"
    navigationLink="https://explore.nil.foundation/"
    sideNavigationContainerClassName={s.sideNavigationContainer}
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
              text="=nil; is a zkRollup that uses zkSharding to securely scale Ethereum to 60,000+ TPS, empowering web3 developers to build scalable, secure, and composable applications."
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
