import React, { isValidElement } from 'react'
import cx from 'classnames'

import s from './RevealText.module.scss'
import { RevealTextProps } from './RevealText'

type AnimationType = 'in' | 'out'
type AnimationProp = Record<AnimationType, number> | number

const anim = {
  fadeIn: {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
    ease: 'circ.inOut',
  },
  fadeOut: {
    start: {
      opacity: 1,
    },
    end: {
      opacity: 0,
    },
    ease: 'circ.inOut',
  },
  fadeUpIn: {
    start: {
      opacity: 0,
      yPercent: 100,
    },
    end: {
      opacity: 1,
      yPercent: 0,
    },
    ease: 'circ.out',
  },
  fadeUpOut: {
    start: {
      opacity: 1,
      yPercent: 0,
    },
    end: {
      opacity: 0,
      yPercent: 100,
    },
    ease: 'circ.inOut',
  },
  fadeRightSmallIn: {
    start: {
      opacity: 0,
      x: 10,
    },
    end: {
      opacity: 1,
      x: 0,
    },
    ease: 'circ.out',
  },
  fadeRightSmallOut: {
    start: {
      opacity: 1,
      x: 0,
    },
    end: {
      opacity: 0,
      x: 100,
    },
    ease: 'circ.inOut',
  },
  fadeUpSmallIn: {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
    },
    ease: 'circ.out',
  },
  fadeUpSmallOut: {
    start: {
      opacity: 1,
      y: 0,
    },
    end: {
      opacity: 0,
      y: 20,
    },
    ease: 'circ.inOut',
  },
  fadeDownIn: {
    start: {
      opacity: 0,
      yPercent: -100,
    },
    end: {
      opacity: 1,
      yPercent: 0,
    },
    ease: 'circ.out',
  },
  fadeDownOut: {
    start: {
      opacity: 1,
      yPercent: 0,
    },
    end: {
      opacity: 0,
      yPercent: -100,
    },
    ease: 'circ.inOut',
  },
  maskIn: {
    start: {
      yPercent: 100,
    },
    end: {
      yPercent: 0,
    },
    ease: 'circ.out',
  },
  maskOut: {
    start: {
      yPercent: 0,
    },
    end: {
      yPercent: -100,
    },
    ease: 'circ.inOut',
  },
  splitIn: {
    start: {
      yPercent: 100,
    },
    end: {
      yPercent: 0,
    },
    ease: 'circ.out',
  },
  splitOut: {
    start: {
      yPercent: 0,
    },
    end: {
      yPercent: -100,
    },
    ease: 'circ.inOut',
  },
} as const

const firstLetterUppercase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const getTimings = (type: AnimationType, duration: AnimationProp, delay: AnimationProp) => {
  const durationTween = duration instanceof Object ? duration[type] : duration
  const delayTween = delay instanceof Object ? delay[type] : delay

  return {
    delay: delayTween / 1000,
    duration: durationTween / 1000,
  }
}

export const getAnimationProps = (type: AnimationType, animation: string) => {
  const { start, end, ease } = anim[`${animation}${firstLetterUppercase(type)}` as keyof typeof anim]

  return {
    start,
    end,
    ease,
  }
}

export const getWords = (children: React.ReactNode, props: RevealTextProps) => {
  const arrayChildren = React.Children.toArray(children)
  const newArrayChildren: React.ReactNode[] = []

  const As = props.tag
  const InnerAs = props.innerTag || props.tag

  arrayChildren.forEach((child) => {
    if (typeof child === 'string') {
      const textString = props.reduceWhiteSpace ? child.replace(/\s+/g, ' ').trim() : child

      const splitText = textString.split(' ')

      splitText.forEach((el, i) => {
        const key = `${el}-${i}-${textString}`
        newArrayChildren.push(
          <As className={cx(s.element, 'wrap')} key={key}>
            <InnerAs className={cx(s.element, { [s.isVisible]: props.isVisible }, s.innerElement)}>{el}</InnerAs>
          </As>,
          ' ',
        )
      })
      return
    }

    if (isValidElement(child) && child?.props?.children) {
      newArrayChildren.push(
        React.cloneElement(child, {
          children: getWords(child.props.children, props),
        } as any),
      )
      return
    }

    newArrayChildren.push(child)
  })

  return newArrayChildren
}
