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
import { HeadingXXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides } from '../overrides'
import sanitizeHtml from 'sanitize-html';

type PositionPageProps = {
  position: UIPosition
}

const PositionPage = ({ position: { title, description, branch, type } }: PositionPageProps) => {
  const { isMobile } = useViewport()
  const sanitizedDescription = sanitizeHtml(description)

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
          <LabelMedium color={PRIMITIVE_COLORS.gray50}>{branch.city}</LabelMedium>
          <LabelMedium color={PRIMITIVE_COLORS.gray50} marginBottom="32px">{type}</LabelMedium>
          <div dangerouslySetInnerHTML={{__html: sanitizedDescription}} />
        </div>
        <DottedSection />
      </div>
    </Container>
  )
}

export default PositionPage
