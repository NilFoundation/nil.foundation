import { REVALIDATE } from 'constants/common'

import Research, { ResearchLayout } from 'pages/Research'
import MetaLayout from 'components/MetaLayout'

import { getAllPath, getSiteConfig, getResearches, getTags } from 'src/strapi'
import { seoData } from 'stubs/researchCards'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Tag } from '../../../../../admin/src/api/tag/content-types/tag/tag'

const TagPage = ({ cms, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <Research data={cms} />
  </MetaLayout>
)

TagPage.getLayout = (page: JSX.Element) => {
  const tags = page?.props?.cms?.tags ?? []
  return <ResearchLayout tags={tags}>{page}</ResearchLayout>
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug ?? ''

  const [posts, tags, config] = await Promise.all([
    getResearches({
      filters: {
        tags: {
          name: {
            $eq: slug,
          },
        },
      },
      sort: ['date:desc'],
    }),
    getTags({
      filters: {
        research: {
          id: {
            $notNull: true,
          },
        },
      },
    }),
    await getSiteConfig(),
  ])

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts,
        tags,
      },
      config,
      seo: seoData,
    },
  }
}

export async function getStaticPaths() {
  const tags = await getAllPath<Tag>('tags', {
    filters: {
      research: {
        id: {
          $notNull: true,
        },
      },
    },
  })

  const paths = tags.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default TagPage
