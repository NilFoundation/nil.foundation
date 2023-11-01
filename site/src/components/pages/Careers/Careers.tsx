import React from 'react'

import Container from 'components/Container'

import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import JoinSection, { getJoinSectionProps } from 'components/JoinSection'
import Intro from './Intro'
import JoinUs from './JoinUs'
import Jobs from './Jobs'

import s from './Careers.module.scss'
import { careersPageData } from 'stubs/careersPageData'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'

type CareersProps = {
  data: typeof careersPageData
}

const Careers = ({ data }: CareersProps) => {
  const { isMobile } = useViewport()

  return (
    <Container className={s.container}>
      <SideNavigation className={s.sideNavigation} title="Careers" titleAnimation={false} />
      <div className={s.root}>
        <div className={s.content}>
          <Intro data={data.intro} />
          <JoinUs data={data.joinUs} className={s.joinUs} />
          <JoinSection {...getJoinSectionProps(data)} />
          <WhiteRectangleLine marginTop={isMobile ? 60 : 224} data={isMobile ? [0] : [0, 0, 96, 66]} />
          <div id="footer_nav" />
        </div>
      </div>
    </Container>
  )
}

export default Careers
