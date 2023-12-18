import cx from 'classnames'
import { useRouter } from 'next/router'

import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import Icon from 'components/Icon'
import SocialButton from 'components/SocialButton'
import Button from 'components/Button'

import SideNavigation from 'components/SideNavigation'
import s from './PostPage.module.scss'

import type { JoinNilBaseData } from 'pages/ProofMarket/JoinNil/JoinNilBaseData'
import { MappedBlog, MappedBlogExtend } from 'src/strapi/types/entities'
import ToggleButton from 'components/ToggleButton'

type ArrowButtonProps = {
  className?: string
}

type PostPageProps = {
  post: MappedBlogExtend
  recommendedPosts?: MappedBlog[]
  content: {
    joinNil: JoinNilBaseData
  }
}

const ArrowButton = ({ className }: ArrowButtonProps) => (
  <Button href="/blog" className={cx(s.centerItems, className)}>
    <Icon name="arrow-up" className={s.arrow} />
    <p>Back to Blog</p>
  </Button>
)

const PostPage = ({ post, recommendedPosts = [], content }: PostPageProps) => {
  const router = useRouter()
  const { isMobile } = useViewport()

  const stubSocialLinks = [
    {
      icon: 'linkedin',
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}&title=${post.title}`,
    },
    {
      icon: 'telegram',
      link: `https://t.me/share/url?url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    },
    {
      icon: 'twitter',
      link: `https://twitter.com/intent/tweet?text=${post.title} ${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    },
  ]

  return (
    <Container className={s.container} id="footer_nav">
      <SideNavigation className={s.sideNavigation} title={<ArrowButton />} titleAnimation={false}>
        <div className={s.social}>
          <p className={s.paragraph}>Share this post</p>
          <div className={s.info}>
            {stubSocialLinks.map((item) => (
              <SocialButton className={s.socialLink} key={item.icon} href={item.link} icon={item.icon} />
            ))}
          </div>
        </div>
      </SideNavigation>
      <div className={s.root}>
        <div className={s.content}>
          <div className={cx(s.head, s.marginBlock)}>
            <div className={cx(s.centerItems, s.marginBlock, s.mobileHead)}>
              <ArrowButton className={s.mobileArrowButton} />
              <div className={cx(s.centerItems, s.types)}>
                {post.category && <p className={s.type}>{post.category.name}</p>}
                <div className={s.tagsWrapper}>
                  {post.tags?.map((tag) => (
                    <ToggleButton isActive key={tag?.slug} href={`/blog/tag/${tag.slug}`}>
                      {tag.name}
                    </ToggleButton>
                  ))}
                </div>
              </div>
            </div>
            <div className={cx(s.content, s.wrapper)}>
              <h1 className={cx(s.title, s.blogTitle, s.marginBlock)}>{post.title}</h1>
              {post.subtitle && <h2 className={cx(s.subtitle, s.marginBlock)}>{post.subtitle}</h2>}
              {isMobile && (
                <div className={s.social}>
                  <p className={s.paragraph}>Share this post</p>
                  <div className={s.info}>
                    {stubSocialLinks.map((item) => (
                      <SocialButton className={s.socialLink} key={item.icon} href={item.link} icon={item.icon} />
                    ))}
                  </div>
                </div>
              )}
              {!isMobile && (
                <div className={s.info}>
                  <p className={cx(s.author, s.paragraph)}>{post.author}</p>
                  <p className={cx(s.date, s.paragraph)}>{post.date ? post.date + '' : 'Invalid date'}</p>
                </div>
              )}
            </div>
          </div>
          <div className={cx(s.main, s.content)} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </Container>
  )
}

export default PostPage
