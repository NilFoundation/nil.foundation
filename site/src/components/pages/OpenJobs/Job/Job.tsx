import { Card } from 'components/Card'
import s from './Job.module.scss'
import { UIJob } from 'src/freshteam/types'
import { HeadingXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { labelOverrides, titleOverrides } from './overrides'

type JobProps = {
  job: UIJob
}

export const Job = ({ job: { id, remote, type, title, plainTextDescription } }: JobProps) => {
  return (
    <Card key={id} className={s.position} href={{ query: `jobId=${id}` }}>
      <div className={s.type}>
        <LabelMedium overrides={labelOverrides}>{remote ? 'Remote' : 'Onsite'}</LabelMedium>
        <LabelMedium overrides={labelOverrides}>{type}</LabelMedium>
      </div>
      <div className={s.title}>
        <HeadingXLarge overrides={titleOverrides}>{title}</HeadingXLarge>
      </div>
      <div className={s.description}>
        <LabelMedium color={PRIMITIVE_COLORS.gray300}>{plainTextDescription}</LabelMedium>
      </div>
    </Card>
  )
}
