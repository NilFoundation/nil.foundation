import Container from 'components/Container'

import FooterAnimationSection from 'components/FooterAnimationSection'
import Hero from './Hero/Hero'
import Win from './Win/Win'
import ZkProof from './ZkProof'
import FullCycle from './FullCycle'
import JoinNil from './JoinNil'
import About from './About'
import Intro from './Intro'

import s from './Home.module.scss'
import { homePageData } from 'stubs/homePageData'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'

type HomeProps = {
  data: typeof homePageData
}

const whiteRectangleLineMarginTop = 123

const whiteRectangleLineMobileMarginTop = 62

const whiteRectangleLineData = [154, 154, 184, 0]

const whiteRectangleLineMobileData = [0]

const Home = ({ data }: HomeProps) => {
  const { isMobile } = useViewport()

  return (
    <Container className={s.root} id="footer_nav">
      <Intro />
      <div className={s.wrapper}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <Win data={data.win} />
          <ZkProof data={data.zkProof} />
          <FullCycle data={data.fullCycle} />
          <JoinNil data={data.joinNil} withMargin />
          <About data={data.about} />
          <WhiteRectangleLine
            data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
            marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
