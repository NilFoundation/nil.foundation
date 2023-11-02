import React from 'react'
import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './Intro.module.scss'
import { careersPageData } from 'stubs/careersPageData'
import { WebButton } from 'components/WebButton'

type IntroProps = {
  className?: string
  data: typeof careersPageData.intro
}

const Intro = ({ className, data: { title, description } }: IntroProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.wrapper, className)}>
      <div className={s.main}>
        <HeadingSection className={s.head} title={title} description={isMobile ? description : null} />
        <div className={s.heroDescription}>
          <p>{description}</p>
        </div>
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <div className={s.linkContainer}>
              <WebButton className={s.link} size="l" href="/careers/jobs">
                See open positions
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
        </div>
        {isMobile && <WhiteRectangle />}
      </div>
      {!isMobile && (
        <div className={s.wrapper}>
          <div className={cx(s.box, s.box1)}>
            <WhiteRectangle />
          </div>
          <div className={cx(s.box, s.box2)}>
            <WhiteRectangle />
          </div>
        </div>
      )}
    </div>
  )
}

export default Intro
