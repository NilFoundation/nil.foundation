import { REVALIDATE, BLOG_PAGE_SIZE, BLOG_POST_SORT } from 'constants/common'
import { getBlogPosts, getCategories, getTags } from 'src/strapi'

import BlogsPage from 'pages/BlogsPage'
import MetaLayout from 'components/MetaLayout'

import { seoData } from 'stubs/blogs'
import { getSiteConfig } from 'src/strapi/getSiteConfig'
import { InferGetStaticPropsType } from 'next'
import { Post } from 'entities/Post'
import { Tag } from 'entities/tag'
import { Category } from 'entities/Category'

const Blogs = ({ cms, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <BlogsPage data={cms} />
  </MetaLayout>
)

export async function getStaticProps() {
  const [posts, tags, categories, config] = await Promise.all([
    getBlogPosts({
      sort: BLOG_POST_SORT,
    }),
    getTags({
      filters: {
        blogs: {
          id: {
            $notNull: true,
          },
        },
      },
    }),
    getCategories(),
    getSiteConfig(),
  ])

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts: posts,
        tags,
        categories,
      },
      seo: seoData,
      config,
    },
  }
}

export default Blogs
