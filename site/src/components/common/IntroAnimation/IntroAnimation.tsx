import React, { useEffect, useRef, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import SideNavigation from 'components/SideNavigation'
import { useViewport } from 'hooks/useViewport'
import { gsap } from 'gsap'
import { useScroll } from 'hooks/useScroll'
import s from './IntroAnimation.module.scss'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'
import dynamic from 'next/dynamic'

const AnimatedDottedContainer = dynamic(() => import('components/AnimatedDottedContainer'), { ssr: false })

IntroAnimation.propTypes = {
  items: PropTypes.array.isRequired,
  navigationTitle: PropTypes.string.isRequired,
  navigationLinkText: PropTypes.string,
  navigationLink: PropTypes.string.isRequired,
  children: PropTypes.any,
  animatedContainerClassName: PropTypes.string,
  className: PropTypes.string,
}

export type IntroAnimationProps = InferProps<typeof IntroAnimation.propTypes>

function IntroAnimation({
  items,
  navigationTitle,
  navigationLinkText,
  navigationLink,
  children,
  animatedContainerClassName,
  className,
  ...props
}: IntroAnimationProps) {
  const sideNavigationRef = useRef(null)
  const [isVisible, setVisible] = useState(false)
  const [isChildrenVisible, setChildrenVisible] = useState(false)
  const [timelineInstance, setTimelineInstance] = useState<gsap.core.Timeline | null>(null)
  const { isMobile } = useViewport()
  const { disableScroll, enableScroll, scrollToTop } = useScroll()
  const prefersReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    scrollToTop().then(disableScroll)
    setTimeout(
      () => {
        setVisible(true)
      },
      prefersReduceMotion ? 0 : 700,
    )

    return () => {
      enableScroll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const sideNavigation = sideNavigationRef.current

    if (!sideNavigation || isMobile === false || !isVisible) {
      return
    }

    const timeline = gsap.timeline({
      repeat: 0,
      delay: 1,
      defaults: { duration: 1.2 },
    })
    timeline.paused()

    const navigationTimeline = gsap.timeline({
      repeat: 0,
      delay: 1,
      defaults: { duration: 1.2 },
    })

    navigationTimeline.to(sideNavigation, {
      scale: '1',
      ease: 'expo.out',
    })

    setTimeout(() => {
      setChildrenVisible(true)
    }, 1400)
    setTimelineInstance(timeline)

    return () => {
      if (timeline) {
        timeline?.kill?.()
      }
      if (navigationTimeline) {
        navigationTimeline?.kill?.()
      }
    }
  }, [isMobile, isVisible, sideNavigationRef])

  return (
    <div {...props} className={classNames(s.container, className)}>
      <div className={s.sideNavigationMobile} ref={sideNavigationRef}>
        <SideNavigation
          title={navigationTitle}
          linkText={navigationLinkText}
          link={navigationLink}
          isVisible={isVisible}
          titleLarge
        />
      </div>
      <SideNavigation
        className={s.sideNavigation}
        title={navigationTitle}
        linkText={navigationLinkText}
        link={navigationLink}
        isVisible={isVisible}
        titleLarge
      />
      <div className={s.wrapper}>
        <AnimatedDottedContainer
          className={classNames(s.animatedContainer, animatedContainerClassName)}
          onInitialAnimationComplete={enableScroll}
          items={items}
          isVisible={isVisible}
          timeline={isMobile ? timelineInstance : undefined}
          scrollTriggerProps={{
            start: 'top top',
            end: `bottom bottom`,
          }}
        />
      </div>
      {typeof children === 'function' ? children(isMobile ? isChildrenVisible : isVisible) : children}
    </div>
  )
}

export default IntroAnimation
