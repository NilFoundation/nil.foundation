import { REVALIDATE, BLOG_PAGE_SIZE, BLOG_POST_SORT } from 'constants/common'
import { getAllPath, getBlogPosts, getCategories, getSiteConfig, getTags } from 'src/strapi'

import BlogsPage from 'pages/BlogsPage'
import MetaLayout from 'components/MetaLayout'

import { seoData } from 'stubs/blogs'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Tag } from '../../../../../admin/src/api/tag/content-types/tag/tag'

const Blogs = ({ cms, seo, slug }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <BlogsPage data={cms} activeTag={slug} />;
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug

  const [posts, tags, categories, config] = await Promise.all([
    getBlogPosts({
      sort: BLOG_POST_SORT,
      filters: {
        tags: {
          name: {
            $eq: slug,
          },
        },
      },
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
      slug,
    },
  }
}

export async function getStaticPaths() {
  const tags = await getAllPath<Tag>('tags', {
    filters: {
      blogs: {
        id: {
          $notNull: true,
        },
      },
    },
  })

  const paths = tags.map((slug: string) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Blogs
