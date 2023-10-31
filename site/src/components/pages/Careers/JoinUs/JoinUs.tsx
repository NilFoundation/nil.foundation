import React from 'react'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'

import s from './JoinUs.module.scss'
import { careersPageData } from 'stubs/careersPageData'
import CareerCard from './CareerCard'

type JoinUsProps = {
  className?: string
  data: typeof careersPageData.joinUs
}

const JoinUs = ({ className, data: { title, cards } }: JoinUsProps) => {
  return (
    <div className={cx(s.wrapper, className)}>
      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.cardsWrapper}>
          {cards.map((card) => (
            // <div
            //   className={s.cardsWrapper}
            //   key={card.title}
            // >
            <CareerCard key={card.title} linkTo={card.linkTo} title={card.title} description={card.description} />
            // </div>
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

export default JoinUs
