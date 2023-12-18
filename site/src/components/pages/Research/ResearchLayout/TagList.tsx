import React from 'react'
import s from './ResearchLayout.module.scss'
import cx from 'classnames'
import { MappedTag } from 'src/strapi/types/entities'
import ToggleButton from 'components/ToggleButton'

type TagListProps = {
  tags: MappedTag[]
  activeTagSlug?: string | string[]
  onTagClick?: (tag: MappedTag) => void
  className?: string
}

const TagList = ({ tags, activeTagSlug, onTagClick, className }: TagListProps) => {
  return (
    <ul className={cx(s.tagList, className)}>
      {tags.map((tagItem) => (
        <li key={tagItem.slug}>
          <ToggleButton
            size="l"
            className={s.tabItem}
            isActive={activeTagSlug === tagItem.slug?.toString()}
            onClick={() => onTagClick?.(tagItem)}
          >
            {tagItem.name}
          </ToggleButton>
        </li>
      ))}
    </ul>
  )
}

export default TagList
