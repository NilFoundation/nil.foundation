import WhiteRectangle from 'components/WhiteRectangle'
import React from 'react'

import s from './WhiteRectangleLine.module.scss'

type Props = {
  data: number[]
  marginTop: number
}

const getCalcValue = (size: number) => {
  return `calc(((${size} / var(--screen-size)) * 100) * 1vw)`
}

const WhiteRectangleLine = ({ data, marginTop }: Props) => {
  return (
    <div style={{ marginTop }} className={s.root}>
      {data.map((item, index) => (
        <div style={{ marginTop: getCalcValue(item) }} key={index} className={s.rectangle}>
          <WhiteRectangle />
        </div>
      ))}
    </div>
  )
}

export default WhiteRectangleLine
