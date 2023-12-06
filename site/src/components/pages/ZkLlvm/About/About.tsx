import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './About.module.scss'
import { homePageData } from 'stubs/homePageData'
import { WebButton } from 'components/WebButton'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type AboutProps = {
  className?: string
  rightHeaderClassName?: string
  rightFooterClassName?: string
  rightDescriptionClassName?: string
  data: typeof homePageData.about
}

function getContent(isMobile: boolean | null, content: string | { isDesktop: string; isMobile: string }) {
  if (typeof content === 'string') {
    return content
  }

  return !isMobile ? content.isDesktop : content.isMobile
}

const About = ({
  className,
  rightHeaderClassName,
  rightDescriptionClassName,
  data: { title, social, desc: description },
}: AboutProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <LeftColumn>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} className={s.heading} iconsClassName={s.headingIcons} />
        {!isMobile && <WhiteRectangle />}
      </LeftColumn>
      <RightColumn className={s.right}>
        {!isMobile && (
          <div className={cx(s.rightHeader, rightHeaderClassName)}>
            <div>
              <WhiteRectangle />
            </div>
            <div>
              <WhiteRectangle />
            </div>
          </div>
        )}
        <div className={cx(s.description, rightDescriptionClassName)}>{getContent(isMobile, description)}</div>
        <div className={s.rightFooter}>
          <div>
            <div className={s.buttonWrapper}>
              <WebButton className={s.link} href="https://explore.nil.foundation">
                Learn more
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <div>
            <WhiteRectangle />
          </div>
        </div>
      </RightColumn>
    </div>
  )
}

export default About
