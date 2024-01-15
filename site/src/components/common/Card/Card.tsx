import Button from 'components/Button'
import Icon from 'components/Icon'
import React, { ComponentPropsWithoutRef } from 'react'

import s from './Card.module.scss'

import cx from 'classnames'
import Link from 'next/link'

type CardProps = {
  children?: React.ReactNode
  href?: ComponentPropsWithoutRef<typeof Link>['href']
  onClick?: (e: MouseEvent) => void
  className?: string
}

const Card = ({ children, href, onClick, className }: CardProps) => {
  return (
    <Button href={href} onClick={onClick} className={cx(s.root, className)}>
      {children}
      <Icon className={s.arrow} name="arrow-up" />
    </Button>
  )
}

export default Card
