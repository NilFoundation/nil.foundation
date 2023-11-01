import Container from 'components/Container'

import JoinNil, { getJoinSectionProps } from './JoinNil'
import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import Hero from './Hero'
import Partners from './Partners'
import OurTeam from './OurTeam'
import Toolchain from './Toolchain'

import s from './About.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'

type AboutProps = {
  data: typeof aboutPageData
}

const whiteRectangleLineMarginTop = 142

const whiteRectangleLineMobileMarginTop = 60

const whiteRectangleLineMobileData = [0]

const whiteRectangleLineData = [142, 142, 168, 0]

const About = ({ data }: AboutProps) => {
  const { isMobile } = useViewport()

  return (
    <Container className={s.container}>
      <SideNavigation className={s.sideNavigation} title="About" titleAnimation={false} />
      <div className={s.root}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <Toolchain data={data.toolchain} />
          <Partners data={data.partners} />
          <OurTeam data={data.ourTeam} />
          <JoinNil {...getJoinSectionProps(data)} />

          <WhiteRectangleLine
            marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
            data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
          />
          <div id="footer_nav" />
        </div>
      </div>

      {/* <FooterAnimationSection className={s.footerSection} /> */}
    </Container>
  )
}

export default About
