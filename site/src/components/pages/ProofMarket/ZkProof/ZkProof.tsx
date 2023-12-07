import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import BenefitsCard from 'components/BenefitsCard'

import s from './ZkProof.module.scss'
import { homePageData } from 'stubs/homePageData'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type ZkProofProps = {
  className?: string
  data: typeof homePageData.zkProof
}

const ZkProof = ({ className, data: { title, content } }: ZkProofProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <LeftColumn className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} className={s.heading} />
        {!isMobile && <WhiteRectangle />}
      </LeftColumn>
      <RightColumn className={s.right}>
        {!isMobile && (
          <div className={s.rightHeader}>
            <div>
              <WhiteRectangle />
            </div>
            <div>
              <WhiteRectangle />
            </div>
          </div>
        )}
        <div className={s.content}>
          {content.map((el) => (
            <BenefitsCard
              key={el.title}
              leftClassName={s.benefitCardLeft}
              className={s.box}
              title={el.title}
              icon={el.icon}
              description={el.description}
            />
          ))}
        </div>
        <WhiteRectangle />
      </RightColumn>
    </div>
  )
}

export default ZkProof
