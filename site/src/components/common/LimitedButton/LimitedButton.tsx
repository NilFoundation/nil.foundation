import { EventHandler } from 'react'
import s from './LimitedButton.module.scss'
import cn from 'classnames'

export type LimitedButtonProps = {
  children: React.ReactNode
  className?: string
  primary?: boolean
  arrow?: boolean
  href?: string
  icon?: React.ReactNode
  onClick?: EventHandler<any>
  disabled?: boolean
}

export const LimitedButton = ({ children, className, primary, arrow, href, icon, onClick, disabled }: LimitedButtonProps) => {
    const Element = href ? 'a' : 'button'
    
    return (
    <Element className={cn(s.button, primary ? s.button_primary : null, className)} onClick={onClick} disabled={disabled}>
      <div className={cn(s.wrap, arrow || icon ? s.wrap_arrow : null)}>
        {children}
        {icon
          ? icon
          : arrow && (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.arrow}>
                <rect
                  x="13.1055"
                  y="25.5364"
                  width="17.7246"
                  height="2.29197"
                  transform="rotate(-45 13.1055 25.5364)"
                />
                <rect x="16.3594" y="12.5593" width="11.3246" height="2.29197" />
                <rect x="25.4121" y="23.9016" width="11.321" height="2.29197" transform="rotate(-90 25.4121 23.9016)" />
              </svg>
            )}
      </div>
    </Element>
  )
}
