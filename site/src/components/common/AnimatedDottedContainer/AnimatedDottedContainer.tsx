import React, { useEffect, useRef, useState } from 'react'
import DottedCard from 'components/DottedCard'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import { useViewport } from 'hooks/useViewport'
import AnimatedCard from './AnimatedCard'
import s from './AnimatedDottedContainer.module.scss'

function AnimatedDottedContainer({
  items,
  onInitialAnimationComplete,
  isVisible,
  timeline,
  className,
  cardWrapperClassName,
  initialAnimationDuration,
  scrollTriggerProps,
}: InferProps<typeof AnimatedDottedContainer.propTypes>) {
  const containerRef = useRef(null)
  const { isMobile } = useViewport()
  const [timelineInstance, setTimelineInstance] = useState<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (isMobile && timelineInstance) {
      timelineInstance?.scrollTrigger?.kill?.()
      timelineInstance.kill?.()
    }

    return () => {
      if (timelineInstance) {
        timelineInstance?.scrollTrigger?.kill?.()
        timelineInstance.kill?.()
      }
    }
  }, [isMobile, timelineInstance])

  return (
    <DottedCard ref={containerRef} className={classNames(s.container, className)}>
      {items.map((item) => (
        <AnimatedCard
          key={item.id}
          {...item}
          timeline={timeline ?? timelineInstance}
          onComplete={onInitialAnimationComplete}
          wrapperClassName={cardWrapperClassName}
          isVisible={isVisible}
          duration={initialAnimationDuration}
        />
      ))}
    </DottedCard>
  )
}

AnimatedDottedContainer.propTypes = {
  items: PropTypes.array.isRequired,
  onInitialAnimationComplete: PropTypes.func,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  cardWrapperClassName: PropTypes.string,
  timeline: PropTypes.any,
  initialAnimationDuration: PropTypes.number,
  scrollTriggerProps: PropTypes.object,
}
AnimatedDottedContainer.defaultProps = {
  isVisible: true,
  scrollTriggerProps: {},
}
export default AnimatedDottedContainer
