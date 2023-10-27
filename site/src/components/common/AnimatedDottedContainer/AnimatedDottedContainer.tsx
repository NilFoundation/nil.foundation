import React, { useEffect, useRef, useState } from 'react';
import DottedCard from 'components/DottedCard';
import PropTypes, { InferProps } from 'prop-types';
// import { gsap } from 'gsap';
import classNames from 'classnames';
import { useViewport } from 'hooks/useViewport';
import AnimatedCard from './AnimatedCard';
import s from './AnimatedDottedContainer.module.scss';
// import { usePrefersReducedMotion } from 'hooks/usePrefersReduceMotion';

function AnimatedDottedContainer({
  items,
  onInitialAnimationComplete,
  isVisible,
  timeline,
  className,
  initialAnimationDuration,
}: // scrollTriggerProps,
InferProps<typeof AnimatedDottedContainer.propTypes>) {
  const containerRef = useRef(null);
  const { isMobile } = useViewport();
  const [timelineInstance, setTimelineInstance] =
    useState<gsap.core.Timeline | null>(null);
  // const prefersReduceMotion = usePrefersReducedMotion();

  // useEffect(() => {
  //   const container = containerRef.current;

  //   if (!container || isMobile == null || isMobile || prefersReduceMotion) {
  //     return;
  //   }

  //   const currentTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top top',
  //       end: `bottom center`,
  //       scrub: 0.5,
  //       invalidateOnRefresh: true,
  //       ...scrollTriggerProps,
  //     },
  //   });
  //   setTimelineInstance(currentTimeline);
  // }, [isMobile, scrollTriggerProps, prefersReduceMotion]);

  useEffect(() => {
    if (isMobile && timelineInstance) {
      timelineInstance?.scrollTrigger?.kill?.();
      timelineInstance.kill?.();
    }

    return () => {
      if (timelineInstance) {
        timelineInstance?.scrollTrigger?.kill?.();
        timelineInstance.kill?.();
      }
    };
  }, [isMobile, timelineInstance]);

  return (
    <DottedCard
      ref={containerRef}
      className={classNames(s.container, className)}
    >
      {items.map(item => (
        <AnimatedCard
          key={item.id}
          {...item}
          timeline={timeline ?? timelineInstance}
          onComplete={onInitialAnimationComplete}
          isVisible={isVisible}
          duration={initialAnimationDuration}
        />
      ))}
    </DottedCard>
  );
}

AnimatedDottedContainer.propTypes = {
  items: PropTypes.array.isRequired,
  onInitialAnimationComplete: PropTypes.func,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  timeline: PropTypes.any,
  initialAnimationDuration: PropTypes.number,
  scrollTriggerProps: PropTypes.object,
};
AnimatedDottedContainer.defaultProps = {
  isVisible: true,
  scrollTriggerProps: {},
};
export default AnimatedDottedContainer;
