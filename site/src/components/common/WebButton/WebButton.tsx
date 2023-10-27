import { InferProps, bool, func, string } from 'prop-types'
import cx from 'classnames'

import { FC, useMemo } from 'react'
import s from './WebButton.module.scss'
import Button from 'components/Button'
import modsClasses from 'utils/modsClasses'
import Icon from 'components/Icon'

type WebButtonProps = {
  children?: string,
  href?: string,
  onClick?:((event: MouseEvent) => void),
  size?: 's' | 'l',
  disabled?: boolean,
  className?: string,
}

const WebButton: FC<WebButtonProps> = ({ children, href, onClick, size='s', disabled, className}) => {


    const classNames = useMemo(() => {
      const classes = modsClasses(s, {
        size,
      })

      return cx(className, s.root, classes, {})
    }, [className, size])

  return (
    <Button href={href} onClick={onClick} className={classNames} disabled={disabled}>
        {children}
        <Icon name="arrow-up" className={s.icon} />
    </Button>
  );
};


export default WebButton;