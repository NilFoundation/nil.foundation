import WhiteRectangle from 'components/WhiteRectangle'
import React from 'react'

import cx from 'classnames'

import s from './WhiteRectangleLine.module.scss'

type Props = {
  data: { id: number; margin: number }[]
  marginTop: number
  className: string
}

const WhiteRectangleLine = ({ data, marginTop, className }: Props) => {
  return (
    <div style={{ '--margin-top': marginTop } as React.CSSProperties} className={cx(s.root, className)}>
      {data.map((item, index) => (
        <div style={{ '--line-margin': item.margin } as React.CSSProperties} key={item.id} className={s.rectangle}>
          <WhiteRectangle />
        </div>
      ))}
    </div>
  )
}

export default WhiteRectangleLine
