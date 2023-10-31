import { memo, useMemo } from 'react'
import cx from 'classnames'

import s from './PostCard.module.scss'
import { MappedBlog } from 'src/strapi/types/entities'
import { Card } from 'components/Card'

type PostCardProps = {
  className?: string
  post: MappedBlog
}

function PostCard({ className, post }: PostCardProps) {
  const isFeaturePost = useMemo(() => {
    return post.isFeature
  }, [post.isFeature])

  return (
    <Card href={`/blog/post/${post.slug}`} className={cx(s.root, { [s.featured]: isFeaturePost })}>
      <div className={cx(s.info, { [s.featureInfo]: isFeaturePost })}>
        <p className={cx(s.author, s.onHoverBlock)}>{post.author}</p>
        <p>{post.date}</p>
      </div>
      <div className={cx(s.content, { [s.featuredContent]: isFeaturePost })}>
        <p
          className={cx(s.title, {
            [s.featureTitle]: isFeaturePost,
          })}
        >
          {post.title}
        </p>
        {post.subtitle && (
          <p
            className={cx({
              [s.featureDescription]: isFeaturePost,
              [s.description]: !isFeaturePost,
            })}
          >
            {post.subtitle}
          </p>
        )}
      </div>
    </Card>
  )
}

export default memo(PostCard)
