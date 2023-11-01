import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import BenefitsCard from 'components/BenefitsCard'

import s from './ZkEnabledApps.module.scss'
import { homePageData } from 'stubs/homePageData'

type ZkEnabledAppsProps = {
  className?: string
  data: typeof homePageData.zkProof
}

const ZkEnabledApps = ({ className, data: { title, content } }: ZkEnabledAppsProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div>
          {content.map((el) => (
            <BenefitsCard
              key={el.title}
              className={s.box}
              title={el.title}
              icon={el.icon}
              description={el.description}
            />
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

export default ZkEnabledApps
