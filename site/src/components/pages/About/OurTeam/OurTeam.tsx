import React from 'react'
import { shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './OurTeam.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'
import { WebButton } from 'components/WebButton'
import { Column } from 'components/Column'

type OurTeamProps = {
  className?: string
  data: typeof aboutPageData.ourTeam
}

const OurTeam = ({ className, data: { title, description, button } }: OurTeamProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <Column type="left" className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} className={s.head} />
        {!isMobile && <WhiteRectangle />}
      </Column>

      <Column type="right" className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <p className={s.title}>{description}</p>
        <div className={s.footer}>
          <div>
            <div className={s.buttonBlock}>
              <WebButton className={s.button} href={button.link}>
                {button.text}
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </Column>
    </div>
  )
}

export default OurTeam
