import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenPositions.module.scss'
import DottedSection from './DottedSection'
import { Job } from 'src/freshteam/types'
import { HeadingXXLarge } from '@nilfoundation/ui-kit'
import { getHeadingOverrides } from './overrides'

type OpenPositionsProps = {
  jobsPostings: Job[]
}

const OpenPositions = ({jobsPostings = []}: OpenPositionsProps) => {
  const { isMobile } = useViewport()
  return (
    <>
      <Container className={s.root}>
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
          <div className={s.wrapper}>
            <HeadingXXLarge overrides={getHeadingOverrides()}>
              Open Positions
            </HeadingXXLarge>
            <div>Inputs</div>
          </div>
          <DottedSection />
        </div>
      </Container>
    </>
  )
}

export default OpenPositions
