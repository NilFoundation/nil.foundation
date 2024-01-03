import { Card } from 'components/Card'
import s from './Job.module.scss'
import { UIJob } from 'src/freshteam/types'
import { HeadingXLarge, LabelLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { descriptionOverrides, labelOverrides, getTitleOverrides } from './overrides'
import { useViewport } from 'hooks/useViewport'

type JobProps = {
  job: UIJob
}

export const Job = ({ job: { id, remote, type, title, plainTextDescription } }: JobProps) => {
  const { isMobile } = useViewport()

  return (
    <Card key={id} className={s.job} href={{ query: `jobId=${id}` }}>
      <div className={s.type}>
        <LabelMedium overrides={labelOverrides}>{remote ? 'Remote' : 'Onsite'}</LabelMedium>
        <LabelMedium overrides={labelOverrides}>{type}</LabelMedium>
      </div>
      <div className={s.title}>
        <HeadingXLarge overrides={getTitleOverrides(!!isMobile)}>{title}</HeadingXLarge>
      </div>
      <div className={s.description}>{plainTextDescription}</div>
    </Card>
  )
}
