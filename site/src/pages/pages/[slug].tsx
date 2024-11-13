import PostPage from 'pages/PostPage'
import MetaLayout from 'components/MetaLayout'

import { getAllPath, getBlogPostBySlug, getBlogPosts, getCommonPageBySlug, getSiteConfig } from 'src/strapi'

import { REVALIDATE } from 'constants/common'

import { postPage } from 'stubs/postPageData'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Page } from '../../../../admin/src/api/page/content-types/page/page'
import CommonPage from 'pages/CommongPage/CommonPage'

const Post = ({ data, content }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={{ title: data.title }}>
    <CommonPage page={data} content={content} />
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug ?? ''
  const [article, config] = await Promise.all([getCommonPageBySlug(slug), getSiteConfig()])

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: article,
      content: postPage,
      config,
    },
  }
}

export async function getStaticPaths() {
  const articles = await getAllPath<Page>('pages')

  const paths = articles.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Post
