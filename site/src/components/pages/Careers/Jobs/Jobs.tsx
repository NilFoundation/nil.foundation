import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './Jobs.module.scss'
import { careersPageData } from 'stubs/careersPageData'
import { WebButton } from 'components/WebButton'

type JobsProps = {
  className?: string
  data: typeof careersPageData.jobs
  isSkillsSection?: boolean
}

const Jobs = ({ className, data: { title, description, button }, isSkillsSection = false }: JobsProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className, { [s.testMargin]: isSkillsSection })}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.titleSection} title={title} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div
          className={cx(s.description, {
            [s.testDescription]: isSkillsSection,
          })}
        >
          {description}
        </div>
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <div className={s.buttonBlock}>
              <WebButton className={s.button} size="l" href={button.link}>
                {button.text}
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
