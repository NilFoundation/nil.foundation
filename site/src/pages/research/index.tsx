import { REVALIDATE } from 'constants/common'

import Research, { ResearchLayout } from 'pages/Research'
import MetaLayout from 'components/MetaLayout'

import { getResearches, getSiteConfig, getTags } from 'src/strapi'
import { seoData } from 'stubs/researchCards'
import { InferGetStaticPropsType } from 'next'

const ResearchPage = ({ cms, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <Research data={cms} />
  </MetaLayout>
)

ResearchPage.getLayout = (page: JSX.Element) => {
  const tags = page?.props?.cms?.tags ?? []
  return <ResearchLayout tags={tags}>{page}</ResearchLayout>
}

export async function getStaticProps() {
  const [posts, tags, config] = await Promise.all([
    getResearches({
      populate: {
        tags: {
          populate: '*',
        },
      },
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

export default ResearchPage
