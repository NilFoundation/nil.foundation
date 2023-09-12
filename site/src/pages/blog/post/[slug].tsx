import PostPage from 'pages/PostPage'
import MetaLayout from 'components/MetaLayout'

import { getAllPath, getCollection, getSingleBySlug, getSiteConfig } from 'src/strapi'

import { REVALIDATE } from 'constants/common'

import { postPage } from 'stubs/postPageData'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Glossary } from 'entities/Glossary'
import { Post } from 'entities/Post'

const Post = ({ data, recommendedPosts, content }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={{ title: data.title, description: data.description || '' }}>
    <PostPage post={data} recommendedPosts={recommendedPosts as any} content={content} />
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug ?? ''
  const [posts, articles, config] = await Promise.all([
    getCollection<Post>('blogs', {
      filters: {
        $or: [
          {
            slug: {
              $notIn: slug,
            },
          },
        ],
      },
      pagination: {
        start: 0,
        limit: 3,
      },
      sort: ['date:desc'],
    }),
    getSingleBySlug<Post>('blogs', slug, {
      tags: {
        populate: '*',
      },
      category: {
        populate: '*',
      },
      recommendedBlogs: {
        populate: '*',
      },
    }),
    getSiteConfig(),
  ])

  if (!articles) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: articles,
      recommendedPosts: articles.recommendedPosts.length > 0 ? articles.recommendedPosts : posts,
      content: postPage,
      config,
    },
  }
}

export async function getStaticPaths() {
  const articles = await getAllPath<Glossary>('blogs')

  const paths = articles.map((article: Glossary) => ({
    params: { slug: article.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Post