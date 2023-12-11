import Container from 'components/Container'

import JoinNil from 'pages/ProofMarket/JoinNil'
import About from 'pages/ProofMarket/About'

import Hero from './Hero'
import FullCycle from './FullCycle'
import Accelerating from './Accelerating'

import Intro from './Intro'

import s from './ZkLlvm.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'
import { useViewport } from 'hooks/useViewport'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import ZkEnabledApps from './ZkEnabledApps'

type ZkLlvmProps = {
  data: typeof zkllvmPageData
}

const whiteRectangleLineMarginTop = 132

const whiteRectangleLineMobileMarginTop = 62

const whiteRectangleLineData = [
  { id: 1, margin: 176 },
  { id: 2, margin: 176 },
  { id: 3, margin: 214 },
  { id: 4, margin: 0 },
]

const whiteRectangleLineMobileData = [{ id: 1, margin: 0 }]

const ZkLlvm = ({ data }: ZkLlvmProps) => {
  const { isMobile } = useViewport()

  return (
    <Container id="footer_nav">
      <Intro />
      <div className={s.wrapper}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <Accelerating data={data.accelerating} />
          <ZkEnabledApps data={data.zkProof} />
          <FullCycle data={data.fullCycle} />
          <JoinNil data={data.joinNil} className={s.joinNil} boxClassName={s.joinNilBox} withMargin />
          <About
            data={data.about}
            rightFooterClassName={s.aboutRightFooter}
            rightHeaderClassName={s.aboutRightHeader}
          />
          <WhiteRectangleLine
            data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
            marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
          />
        </div>
      </div>
    </Container>
  )
}

export default ZkLlvm
