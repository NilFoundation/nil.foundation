import React, { forwardRef } from 'react'
import { string, any, InferProps } from 'prop-types'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'

import s from './StickyContainer.module.scss'

type StickyContainerProps = {
  children?: React.ReactNode
  className?: string
}

const StickyContainer = forwardRef<HTMLDivElement, StickyContainerProps>(({ className, children }, ref) => (
  <div ref={ref} className={cx(s.root, className)}>
    {children}
    <WhiteRectangle className={s.whiteRectangle} />
  </div>
))

StickyContainer.displayName = 'StickyContainer'

export default StickyContainer
