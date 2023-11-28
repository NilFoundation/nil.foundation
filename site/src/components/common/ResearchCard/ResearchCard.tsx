import { memo } from 'react'
import cx from 'classnames'

import s from './ResearchCard.module.scss'
import { MappedResearch } from 'src/strapi/types/entities'
import { Card } from 'components/Card'
import ToggleButton from 'components/ToggleButton'

type ResearchCardProps = {
  className?: string
  content: MappedResearch
  withTags?: boolean
}

function ResearchCard({ className, content, withTags }: ResearchCardProps) {
  return (
    <Card href={content.link} className={cx(s.root, className)}>
      <div>
        <div className={s.info}>
          <p className={s.author}>{content.author}</p>
          <p className={s.date}>{content.date}</p>
        </div>
        <h3 className={s.title}>{content.title}</h3>
      </div>
      {withTags && (
        <div className={s.tags}>
          {content.tags?.map((tag) => (
            <ToggleButton className={s.tag} key={tag?.slug} isActive>
              {tag?.name}
            </ToggleButton>
          ))}
        </div>
      )}
    </Card>
  )
}

export default memo(ResearchCard)
