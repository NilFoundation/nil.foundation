import React from 'react'
import cx from 'classnames'

import s from './RightColumn.module.scss'

interface Props {
  className?: string
  children: React.ReactNode
}

const RightColumn = ({ className, children }: Props) => {
  return <div className={cx(s.root, className)}>{children}</div>
}

export default RightColumn
