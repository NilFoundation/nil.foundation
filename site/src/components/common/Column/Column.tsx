import React from 'react'
import cx from 'classnames'

import modsClasses from 'utils/modsClasses'

import s from './Column.module.scss'

interface Props {
  className?: string
  type: 'left' | 'right'
  children: React.ReactNode
}

const LeftColumn = ({ className, children, type }: Props) => {
  const mods = modsClasses(s, { type })
  return <div className={cx(s.root, className, mods)}>{children}</div>
}

export default LeftColumn
