import React, { useEffect, useRef, useState } from 'react'
import WhiteRectangle from 'components/WhiteRectangle'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import { gsap } from 'gsap'
import s from './AnimatedDottedContainer.module.scss'
import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion'

export const ANIMATION_CARD_ALIGNMENT = Object.freeze({
  top: 'top',
  bottom: 'bottom',
})

const getTimelineWithMultipleTransform = (
  timeline: gsap.core.Timeline,
  transformValueList: any[],
  container: HTMLDivElement,
) => {
  const firstValue = transformValueList[0]
  timeline.to(
    container,
    firstValue.duration ?? 1,
    {
      y: firstValue.value,
      ease: 'sine.out',
    },
    0,
  )
  for (let index = 1; index < transformValueList.length; ++index) {
    const currentValue = transformValueList[index]
    const previousValue = transformValueList[index - 1]
    timeline.to(
      container,
      currentValue.duration ?? 1,
      {
        y: currentValue.value,
        ease: 'sine.out',
        delay: previousValue.duration + 0.3,
      },
      0,
    )
  }
}

function AnimatedCard({
  alignment,
  duration,
  ySourceValue,
  yTransformValue,
  yTransformValueList,
  timeline,
  onComplete,
  isVisible,
  hideLine,
  className,
  children,
  ...props
}: InferProps<typeof AnimatedCard.propTypes>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isCompleted, setCompleted] = useState(false)
  const prefersReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current

    if (!container || !isVisible) {
      return
    }

    if (prefersReduceMotion) {
      setCompleted(true)
      onComplete?.()
      return
    }

    const tween = gsap.fromTo(
      container,
      {
        ...(ySourceValue.endsWith('px') ? { '--yTransform': '0' } : { y: '0' }),
      },
      {
        ...(ySourceValue.endsWith('px') ? { '--yTransform': ySourceValue.replace('px', '') } : { y: ySourceValue }),
        duration,
        ease: 'expo.out',
        onComplete: () => {
          setCompleted(true)
          onComplete?.()
        },
      },
    )

    return () => {
      if (tween) {
        tween.kill()
      }
    }
  }, [containerRef, ySourceValue, isVisible, duration, onComplete, prefersReduceMotion])

  useEffect(() => {
    const container = containerRef.current

    if (prefersReduceMotion) {
      return
    }

    if (timeline && container && isCompleted && (yTransformValue || yTransformValueList)) {
      if (yTransformValueList) {
        getTimelineWithMultipleTransform(timeline, yTransformValueList, container)
        return
      }
      timeline.to(
        container,
        {
          y: yTransformValue,
          ease: 'sine.out',
        },
        '<',
      )
    }
  }, [timeline, isCompleted, yTransformValue, yTransformValueList, prefersReduceMotion])

  return (
    <div className={classNames(s.cardWrapper, alignment === 'top' ? s.top : s.bottom)}>
      <div
        ref={containerRef}
        {...props}
        className={classNames(s.card, alignment === 'top' ? s.cardTop : s.cardBottom, className)}
        style={prefersReduceMotion ? { transform: `translateY(${ySourceValue})` } : {}}
      >
        {typeof children === 'function' ? children(isCompleted) : children}
        {!hideLine && <WhiteRectangle className={s.line} />}
      </div>
    </div>
  )
}

AnimatedCard.propTypes = {
  duration: PropTypes.number.isRequired,
  ySourceValue: PropTypes.string.isRequired,
  yTransformValue: PropTypes.string,
  yTransformValueList: PropTypes.array,
  timeline: PropTypes.any,
  alignment: PropTypes.oneOf(Object.values(ANIMATION_CARD_ALIGNMENT)),
  onComplete: PropTypes.func,
  isVisible: PropTypes.bool,
  hideLine: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}

AnimatedCard.defaultProps = {
  duration: 0.8,
  alignment: ANIMATION_CARD_ALIGNMENT.top,
  isVisible: true,
}

export default AnimatedCard
