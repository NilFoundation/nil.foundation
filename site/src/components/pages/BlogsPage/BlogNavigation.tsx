import React from 'react'
import Button from 'components/Button/Button'
import cx from 'classnames'
import TagButton from 'components/TagButton'
import SideNavigation from 'components/SideNavigation'
import PropTypes, { InferProps } from 'prop-types'
import s from './BlogsPage.module.scss'
import { MappedCategory, MappedTag } from 'src/strapi/types/entities'
import { useRouter } from 'next/router'
import ToggleButton from 'components/ToggleButton'

type BlogNavigationProps = {
  activeCategory?: string
  activeTag?: string
  categories?: MappedCategory[]
  tags?: MappedTag[]
  className?: string
  linkWrapperClassName?: string
}

function BlogNavigation({
  activeCategory,
  activeTag,
  categories,
  tags,
  className,
  linkWrapperClassName,
}: BlogNavigationProps) {
  const router = useRouter()

  return (
    <SideNavigation
      className={cx(s.sideNavigation, className)}
      linkWrapperClassName={s.linkWrapper}
      titleAnimation={false}
    >
      <div className={s.sideNavigationInner}>
        <div className={s.buttonsWrapper}>
          <Button
            href="/blog"
            className={cx(s.filterButtons, {
              [s.activeButton]: !activeTag && !activeCategory,
            })}
          >
            All
          </Button>
          {categories?.map((button) => (
            <Button
              key={button.slug}
              onClick={() => router.push(`/blog/category/${button.slug}`)}
              className={cx(s.filterButtons, {
                [s.activeButton]: activeCategory === button.slug,
              })}
            >
              {button.name}
            </Button>
          ))}
        </div>
        {tags && (
          <div className={s.tags}>
            {tags.map((tag) => (
              <ToggleButton key={tag.slug} isActive={tag.slug === activeTag} href={`/blog/tag/${tag.slug}`}>
                {tag.name}
              </ToggleButton>
            ))}
          </div>
        )}
      </div>
    </SideNavigation>
  )
}

export default BlogNavigation
