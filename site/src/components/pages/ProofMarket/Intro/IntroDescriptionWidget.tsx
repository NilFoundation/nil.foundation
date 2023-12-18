import React from 'react'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'

type IntroDescriptionWidgetProps = {
  isVisible: boolean
}

const IntroDescriptionWidget = ({ isVisible }: IntroDescriptionWidgetProps) => {
  return (
    <div className={s.descriptionMobile}>
      <IntroDescription
        isVisible={isVisible}
        text="Get Ethereum-verifiable proofs tailored to your application requirements."
      />
      <IntroDescription
        isVisible={isVisible}
        className={s.descriptionItem}
        text={
          'Benefit from decentralized network of proof producers with the first marketplace for zk proof generation.'
        }
        delay={300}
      />
    </div>
  )
}

export default IntroDescriptionWidget
