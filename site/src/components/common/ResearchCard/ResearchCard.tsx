import { memo } from 'react'
import cx from 'classnames'

import TagButton from 'components/TagButton'

import s from './ResearchCard.module.scss'
import { MappedResearch } from 'src/strapi/types/entities'
import { Card } from 'components/Card'

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
            <TagButton className={s.tag} key={tag?.slug} tag={tag?.name} />
          ))}
        </div>
      )}
    </Card>
  )
}

export default memo(ResearchCard)
