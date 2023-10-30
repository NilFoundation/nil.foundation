import Button from 'components/Button'
import Icon from 'components/Icon'
import React from 'react'

import s from './Card.module.scss'

import cx from 'classnames'

type CardProps = {
  children?: React.ReactNode
  href?: string
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
