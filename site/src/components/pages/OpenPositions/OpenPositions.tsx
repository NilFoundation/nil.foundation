import Script from 'next/script'

import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenPositions.module.scss'
import DottedSection from './DottedSection'

const OpenPositions = () => {
  const { isMobile } = useViewport()
  return (
    <>
      <Container className={s.root} id="footer_nav">
        {isMobile && (
          <Button className={s.btn} href="/careers">
            <Icon name="arrow-up" className={s.arrow} />
            Careers
          </Button>
        )}
        {!isMobile && (
          <StickyContainer>
            <Button className={s.btn} href="/careers">
              <Icon name="arrow-up" className={s.arrow} />
              Careers
            </Button>
            <WhiteRectangle />
          </StickyContainer>
        )}
        <div className={s.content}>
          <div className={s.wrapper} id="freshteam-widget" />
          <DottedSection />
        </div>
      </Container>
      <Script
        src="https://s3.amazonaws.com/files.freshteam.com/production/142690/attachments/6004875605/original/6000069521_widget.js?1662042007"
        strategy="lazyOnload"
      />
    </>
  )
}

export default OpenPositions
