import React, { useEffect, useRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { gsap } from 'gsap'
import { useViewport } from 'hooks/useViewport'
import RevealText from 'components/RevealText'
import classNames from 'classnames'
import s from './IntroAnimation.module.scss'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'

function IntroDescription({
  text,
  delay,
  isVisible,
  duration,
  className,
}: InferProps<typeof IntroDescription.propTypes>) {
  const ref = useRef(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const { isMobile } = useViewport()
  const prefersReduceMotion = usePrefersReducedMotion()

  // useEffect(() => {
  //   if (isMobile) {
  //     return;
  //   }

  //   timelineRef.current = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: 'body',
  //       start: 'top top',
  //       end: `+=10%`,
  //       scrub: 0.5,
  //     },
  //   });

  //   if (isMobile && timelineRef.current) {
  //     timelineRef.current?.scrollTrigger?.kill?.();
  //     timelineRef.current.kill();
  //   }

  //   return () => {
  //     if (timelineRef.current) {
  //       timelineRef.current?.scrollTrigger?.kill?.();
  //       timelineRef.current.kill();
  //     }
  //   };
  // }, [isMobile]);

  useEffect(() => {
    const description = ref.current
    const timeline = timelineRef.current

    if (!description || !isVisible || !timeline || prefersReduceMotion) {
      return
    }

    timeline.to(description, {
      opacity: '0',
      y: '-20%',
      ease: 'power3.out',
    })
  }, [ref, timelineRef, isVisible, prefersReduceMotion])

  if (!isVisible) {
    return null
  }

  return (
    <div ref={ref} className={classNames(s.descriptionWrapper, className)}>
      <RevealText as="p" isVisible className={classNames(s.description)} delay={delay} duration={duration}>
        {text}
      </RevealText>
    </div>
  )
}

IntroDescription.propTypes = {
  text: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
}
IntroDescription.defaultProps = {
  isVisible: true,
}
export default IntroDescription
