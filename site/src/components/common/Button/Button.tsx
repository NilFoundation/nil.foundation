import { ComponentProps, ElementType, ReactNode, forwardRef, useMemo } from 'react'
import Link from 'next/link'
import cx from 'classnames'

import modsClasses from 'utils/modsClasses'
import isExternalLink from 'utils/isExternalLink'

import s from './Button.module.scss'

type ButtonElementProps<T extends ElementType = ElementType> = ComponentProps<T>

type ButtonOwnProps<T extends ElementType = ElementType> = {
  as?: T
  hover?: 'underline' | 'none'
  href?: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

export type ButtonProps<T extends ElementType = ElementType> = ButtonOwnProps<T> &
  Omit<ButtonElementProps<T>, keyof ButtonOwnProps<T>>

const Button = forwardRef<any, ButtonProps>(
  ({ className, children, as, href, hover = 'none', onClick, ...otherProps }, ref) => {
    const CustomTag = useMemo(() => {
      if (as) return as
      if (href) return 'a'
      return 'button'
    }, [href, as])

    const isExternal = useMemo(() => isExternalLink(href || ''), [href])

    const classNames = useMemo(() => {
      const classes = modsClasses(s, {
        hover,
      })

      return cx(className, s.root, classes, {})
    }, [className, hover])

    const handleClick = () => {
      if (onClick) onClick()
    }

    if (href && !isExternal) {
      return (
        <Link href={href} className={classNames} ref={ref} {...otherProps}>
          {children}
        </Link>
      )
    }

    return (
      <CustomTag
        className={classNames}
        href={href}
        ref={ref}
        rel={href && isExternal && 'noopener noreferrer'}
        target={href && isExternal && '_blank'}
        onClick={handleClick}
        {...otherProps}
      >
        {children}
      </CustomTag>
    )
  },
)

Button.displayName = 'Button'

export default Button
