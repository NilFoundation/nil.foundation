import React, { ReactNode } from 'react'
import { string, any } from 'prop-types'
import cx from 'classnames'

import s from './Container.module.scss'

type ContainerProps = {
  className?: string
  children?: ReactNode
  id?: string
}

const Container = ({ className, children, id }: ContainerProps) => (
  <main id={id} className={cx(s.root, className)}>
    {children}
  </main>
)

export default Container
