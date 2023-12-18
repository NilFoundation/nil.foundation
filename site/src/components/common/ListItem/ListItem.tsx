import React from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import s from './ListItem.module.scss'

function ListItem({ className, classNameTitle, title, description }: InferProps<typeof ListItem.propTypes>) {
  return (
    <div className={cx(s.root, className)}>
      <div className={cx(s.title, classNameTitle)}>{title}</div>
      {description && <p className={s.description}>{description}</p>}
    </div>
  )
}

ListItem.propTypes = {
  className: string,
  classNameTitle: string,
  title: string,
  description: string,
}

export default ListItem
