import { Card } from 'components/Card'
import React from 'react'

import s from './CareerCard.module.scss'

type Props = {
  linkTo: string
  title: string
  description: string
}

const CareerCard = ({ linkTo, title, description }: Props) => {
  return (
    <Card href={linkTo} className={s.root}>
      <h2 className={s.title}>{title}</h2>
      <p>{description}</p>
    </Card>
  )
}

export default CareerCard
