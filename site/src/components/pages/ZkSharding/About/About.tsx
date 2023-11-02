import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './About.module.scss'
import { homePageData } from 'stubs/homePageData'
import { WebButton } from 'components/WebButton'

type AboutProps = {
  className?: string
  data: typeof homePageData.about
}

const About = ({ className, data: { title, social, description } }: AboutProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.heading} title={title} socials={social} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && (
          <div className={cx(s.rightHeader)}>
            <div>
              <WhiteRectangle />
            </div>
            <div>
              <WhiteRectangle />
            </div>
          </div>
        )}
        <div className={cx(s.description)}>{description}</div>
        <div className={s.rightFooter}>
          <div>
            <div className={s.buttonWrapper}>
              <WebButton className={s.link} href="https://proof.market/#/market/account_mina">
                Learn more
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <div>
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
