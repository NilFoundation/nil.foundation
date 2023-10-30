import { InferProps, bool, func, string } from 'prop-types'
import cx from 'classnames'

import { FC, useMemo } from 'react'
import s from './WebButton.module.scss'
import Button from 'components/Button'
import modsClasses from 'utils/modsClasses'
import Icon from 'components/Icon'

type WebButtonProps = {
  children?: string
  href?: string
  onClick?: (event: MouseEvent) => void
  size?: 's' | 'l'
  disabled?: boolean
  className?: string
}

const WebButton: FC<WebButtonProps> = ({ children, href, onClick, size = 's', disabled, className }) => {
  const isDisabledHref = useMemo(() => {
    const url = disabled ? null : href
    return url
  }, [disabled, href])

  const isDisabledClick = useMemo(() => {
    const clickEvent = disabled ? null : onClick
    return clickEvent
  }, [disabled, onClick])

  const classNames = useMemo(() => {
    const classes = modsClasses(s, {
      size,
    })
    return cx(className, s.root, classes, {})
  }, [className, size])

  return (
    <Button href={isDisabledHref} onClick={isDisabledClick} className={classNames} disabled={disabled}>
      {children}
      <Icon name="arrow-up" className={s.icon} />
    </Button>
  )
}

export default WebButton
