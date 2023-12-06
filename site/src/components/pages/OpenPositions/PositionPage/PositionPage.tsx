import Container from 'components/Container'
import localStyles from './PositionPage.module.scss'
import commonStyles from '../OpenPositions.module.scss'
import { UIPosition } from 'src/freshteam/types'
import { useViewport } from 'hooks/useViewport'
import Button from 'components/Button'
import Icon from 'components/Icon'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import DottedSection from '../DottedSection'
import { HeadingXXLarge } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides } from '../overrides'

type PositionPageProps = {
    position: UIPosition
}

const PositionPage = ({position: {title}}: PositionPageProps) => {
      const { isMobile } = useViewport()

    return (
        <Container className={commonStyles.root}>
        {isMobile && (
          <Button className={commonStyles.btn} href="/careers/jobs">
            <Icon name="arrow-up" className={commonStyles.arrow} />
            Open positions
          </Button>
        )}
        {!isMobile && (
          <StickyContainer>
            <Button className={commonStyles.btn} href="/careers/jobs">
              <Icon name="arrow-up" className={commonStyles.arrow} />
              Open positions
            </Button>
            <WhiteRectangle />
          </StickyContainer>
        )}
        <div className={commonStyles.content}>
          <div className={commonStyles.wrapper}>
            <HeadingXXLarge overrides={getPageTitleOverrides()}>{title}</HeadingXXLarge>
          </div>
            <DottedSection />
        </div>
        </Container>
    )
}

export default PositionPage