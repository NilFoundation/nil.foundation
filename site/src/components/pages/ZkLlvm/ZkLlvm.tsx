import Container from 'components/Container'

import JoinNil from 'pages/Home/JoinNil'
import About from 'pages/Home/About'

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

const ZkLlvm = ({ data }: ZkLlvmProps) => {
  const { isMobile } = useViewport()

  return (
    <Container>
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
          <WhiteRectangleLine data={isMobile ? [0] : [176, 176, 214, 0]} marginTop={isMobile ? 62 : 132} />
          <div id="footer_nav" />
        </div>
      </div>
    </Container>
  )
}

export default ZkLlvm
