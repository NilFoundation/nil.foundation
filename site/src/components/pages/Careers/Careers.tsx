import React from 'react'

import Container from 'components/Container'

import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import JoinSection, { getJoinSectionProps } from 'components/JoinSection'
import Intro from './Intro'
import JoinUs from './JoinUs'
import s from './Careers.module.scss'
import { careersPageData } from 'stubs/careersPageData'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'

type CareersProps = {
  data: typeof careersPageData
}

const whiteRectangleLineMarginTop = 224

const whiteRectangleLineMobileMarginTop = 60

const whiteRectangleLineData = [
  { id: 1, margin: 0, flexBasis: 275.5 },
  { id: 2, margin: 0, flexBasis: 275.5 },
  { id: 3, margin: 96, flexBasis: 275 },
  { id: 4, margin: 66, flexBasis: 259 },
]

const whiteRectangleLineMobileData = [{ id: 1, margin: 0 }]

const Careers = ({ data }: CareersProps) => {
  const { isMobile } = useViewport()

  return (
    <Container className={s.container} id="footer_nav">
      <SideNavigation className={s.sideNavigation} title="Careers" titleAnimation={false} />
      <div className={s.root}>
        <div className={s.content}>
          <Intro data={data.intro} />
          {!isMobile && <JoinUs data={data.joinUs} className={s.joinUs} />}
          <JoinSection {...getJoinSectionProps(data)} />
          <WhiteRectangleLine
            marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
            data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
          />
        </div>
      </div>
    </Container>
  )
}

export default Careers
