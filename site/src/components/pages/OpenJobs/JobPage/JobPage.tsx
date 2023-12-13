import Container from 'components/Container'
import localStyles from './Styles.module.scss'
import commonStyles from '../OpenJobs.module.scss'
import { UIJob } from 'src/freshteam/types'
import { useViewport } from 'hooks/useViewport'
import Button from 'components/Button'
import Icon from 'components/Icon'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import DottedSection from '../DottedSection'
import { HeadingXXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides } from '../overrides'
import ApplicationForm from './ApplicationForm'

type JobPageProps = {
  job: UIJob
}

const JobPage = ({ job: { title, description, branch, type } }: JobPageProps) => {
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
          <LabelMedium color={PRIMITIVE_COLORS.gray50}>{branch.location}</LabelMedium>
          <LabelMedium color={PRIMITIVE_COLORS.gray50} marginBottom="32px">
            {type}
          </LabelMedium>
          <div className={localStyles.freshteamContent} dangerouslySetInnerHTML={{ __html: description }} />
          <ApplicationForm />
        </div>
        <DottedSection />
      </div>
    </Container>
  )
}

export default JobPage
