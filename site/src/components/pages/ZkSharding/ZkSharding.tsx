import Container from 'components/Container'
import React from 'react'
import { zkShardingPageData } from 'stubs/zkShardingPageData'
import Intro from './Intro'

import s from './ZkSharding.module.scss'
import Hero from './Hero'
import JoinNil from './JoinNil'
import About from './About'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'
import Secure from './Secure'
import More from './More'
import Cherries from './Cherries'

type Props = {
  data: typeof zkShardingPageData
}

const mobileFooterData = [{ id: 1, margin: 0 }]

const footerData = [
  { id: 1, margin: 184 },
  { id: 2, margin: 184 },
  { id: 3, margin: 214 },
  { id: 4, margin: 0 },
]

const mobileMarginTop = 62

const marginTop = 113

const ZkSharding = ({ data }: Props) => {
  const { isMobile } = useViewport()

  return (
    <Container id="footer_nav">
      <Intro />

      <div className={s.wrapper}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <More data={data.more} />
          <Secure data={data.secure} />
          <Cherries data={data.cherries} />
          <JoinNil data={data.joinNil} className={s.joinNilRoot} boxClassName={s.JoinNinBox} />
          <About data={data.about} />
          <WhiteRectangleLine
            className={s.whiteRectangleLine}
            data={isMobile ? mobileFooterData : footerData}
            marginTop={isMobile ? mobileMarginTop : marginTop}
          />
        </div>
      </div>
    </Container>
  )
}

export default ZkSharding
