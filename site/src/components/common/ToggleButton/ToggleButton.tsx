import cx from 'classnames'

import { FC, useCallback, useMemo } from 'react'
import s from './ToggleButton.module.scss'
import Button from 'components/Button'
import modsClasses from 'utils/modsClasses'

type ToggleButtonProps = {
  children: string
  href?: string
  onClick?: (event: MouseEvent) => void
  size?: 's' | 'l'
  disabled?: boolean
  className?: string
  isActive?: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({
  children,
  href,
  onClick,
  size = 's',
  disabled,
  className,
  isActive = false,
}) => {
  const verifiedHref = useMemo(() => {
    const url = !disabled && href ? href : null
    return url
  }, [disabled, href])

  const handleClick = useCallback(
    (e: MouseEvent) => {
      !disabled && onClick && onClick(e)
    },
    [disabled, onClick],
  )
  const isActiveStyle = isActive ? 'active' : 'inactive'

  const classNames = useMemo(() => {
    const classes = modsClasses(s, {
      size,
      isActiveStyle,
    })
    return cx(className, s.root, classes, {})
  }, [className, size, isActiveStyle])

  return (
    <Button href={verifiedHref} onClick={handleClick} className={classNames} disabled={disabled}>
      {children}
    </Button>
  )
}

export default ToggleButton
