import { useCallback, useEffect, useMemo, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'
import axios from 'axios'

import { useViewport } from 'hooks/useViewport'
import { useRouter } from 'next/router'
import { useScroll } from 'hooks/useScroll'

import Container from 'components/Container'
import PostCard from 'components/PostCard'
import TagButton from 'components/TagButton'
import Button from 'components/Button'
import BlogNavigation from 'pages/BlogsPage/BlogNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import ArticlesNotFound from './ArticlesNotFound'

import s from './BlogsPage.module.scss'
import { Tag } from 'entities/tag'
import { Category } from 'entities/Category'
import { Post } from 'entities/Post'
import { Meta } from 'entities/Meta'
import { MappedBlog, MappedCategory, MappedTag } from 'src/strapi/types/entities'
import { Card } from 'components/Card'

type BlogsPageProps = {
  data: {
    tags: MappedTag[]
    posts: MappedBlog[]
    categories: MappedCategory[]
  }
  activeTag?: string
  activeCategory?: string
}

function BlogsPage({ data, activeTag, activeCategory }: BlogsPageProps) {
  const { isMobile } = useViewport()
  const { scrollToTop } = useScroll()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [])

  return (
    <Container className={s.container}>
      <BlogNavigation activeTag={activeTag} activeCategory={activeCategory} {...data} />
      <div className={s.root}>
        <div className={s.inner}>
          <div className={s.pageHead}>
            <h1 className={cx(s.pageTitle, s.headItem)}>Blog</h1>
            <h2 className={cx(s.pageDescription, s.headItem)}>
              Stay in touch with our products development and explore zero-knowledge technology
            </h2>
            {isMobile && (
              <div className={s.mobileSortButtons}>
                <div className={s.scrollWrapper}>
                  <div className={s.buttonsWrapper}>
                    <Button
                      cbData="All"
                      onClick={() => router.push('/blog')}
                      className={cx(s.filterButtons, {
                        [s.activeButton]: !activeCategory && !activeTag,
                      })}
                    >
                      All
                    </Button>
                    {data.categories.map((button) => (
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
                </div>
                <div className={s.scrollWrapper}>
                  <div className={s.tags}>
                    {data.tags.map((tag) => (
                      <TagButton
                        className={cx({
                          [s.activeTag]: activeTag === tag.name,
                        })}
                        key={tag.slug}
                        tag={tag.name}
                        onClick={(tag) => {
                          router.push(`/blog/tag/${tag}`)
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={cx(s.content, s.centeredItems)}>
            {data.posts && data.posts.length > 0 ? (
              data.posts.map((post) => <PostCard key={post.id} className={s.blogPost} post={post} />)
            ) : (
              <ArticlesNotFound title="Articles not found" />
            )}
          </div>
        </div>
      </div>
      <FooterAnimationSection className={s.footerSection} />
    </Container>
  )
}

export default BlogsPage
