import { Card } from 'components/Card'
import s from './Position.module.scss'
import { Position as PositionType } from 'src/freshteam/types'
import { LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { labelOverrides } from './overrides'

type PositionProps = {
  position: PositionType
}

export const Position = ({ position: { id, remote, type } }: PositionProps) => {
  return (
    <Card key={id} className={s.position} href={{ query: { jobId: id } }}>
      <div className={s.type}>
        <LabelMedium overrides={labelOverrides}>{remote ? 'Remote' : 'Onsite'}</LabelMedium>
        <LabelMedium overrides={labelOverrides}>{type === 'full_time' ? 'Full Time' : 'Part Time'}</LabelMedium>
      </div>
    </Card>
  )
}
