import MetaLayout from 'components/MetaLayout/MetaLayout'

import { api } from 'src/freshteam'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { PositionPage as PositionPageComponent } from 'pages/OpenPositions'

const PositionPage = ({ jobPosting, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <PositionPageComponent position={jobPosting} />
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const id = params?.id

  if (!id) {
    return {
      notFound: true,
    }
  }

  const jobPosting = await api.getJobPosting(id)

  if (!jobPosting) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      jobPosting,
      seo: {
        title: jobPosting.title,
        description: jobPosting.plainTextDescription,
      },
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = await api.getAllPositionPages()

  return {
    paths: paths.map((x) => ({ params: { id: x.toString() } })),
    fallback: true,
  }
}

export default PositionPage
