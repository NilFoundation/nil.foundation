import Container from 'components/Container'
import React from 'react'
import { zkShardingPageData } from 'stubs/zkShardingPageData'
import Intro from './Intro'

import s from './ZkSharding.module.scss'
import Hero from './Hero'
import JoinNil from 'pages/Home/JoinNil'
import About from 'pages/Home/About'
import WhiteRectangleLine from 'components/WhiteRectangleLine'
import { useViewport } from 'hooks/useViewport'

type Props = {
  data: typeof zkShardingPageData
}

const mobileFooterData = [0]

const footerData = [176, 176, 214, 0]

const mobileMarginTop = 62

const marginTop = 132

const ZkSharding = ({ data }: Props) => {
  const { isMobile } = useViewport()

  return (
    <Container>
      <Intro />

      <div className={s.wrapper}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <JoinNil data={data.joinNil} withMargin />
          <About data={data.about} />
          <WhiteRectangleLine
            data={isMobile ? mobileFooterData : footerData}
            marginTop={isMobile ? mobileMarginTop : marginTop}
          />
          <div id="footer_nav" />
        </div>
      </div>

      <div id="footer_nav" />
    </Container>
  )
}

export default ZkSharding
