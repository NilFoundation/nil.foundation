import React from 'react'

import cx from 'classnames'
import { zkShardingPageData } from 'stubs/zkShardingPageData'
import { useViewport } from 'hooks/useViewport'

import s from './Cherries.module.scss'
import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import { WebButton } from 'components/WebButton'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type Props = {
  className?: string
  data: typeof zkShardingPageData.cherries
}

const Cherries = ({ data: { title, description, content }, className }: Props) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <LeftColumn>
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} description={description} />
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
          <div>
            {content.map((el) => (
              <div className={s.box} key={el.title}>
                <h2 className={s.title}>{el.title}</h2>
                <p className={s.description}>{el.description}</p>
              </div>
            ))}
          </div>
          <div className={s.lineWrapper}>
            <WhiteRectangle />
          </div>
        </div>
      </RightColumn>
    </div>
  )
}

export default Cherries
