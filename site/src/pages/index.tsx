import { REVALIDATE } from 'constants/index'

import MetaLayout from 'components/MetaLayout'

import { getSiteConfig } from 'src/strapi/getSiteConfig'
import { InferGetStaticPropsType } from 'next'
import { zkShardingPageData, seoData } from 'stubs/zkShardingPageData'
import { LandingPage } from 'pages/LandingPage/LandingPage'

const HomePage = ({ data, seo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MetaLayout seo={seo}>
      <LandingPage />
    </MetaLayout>
  )
}

export async function getStaticProps() {
  const config = await getSiteConfig()
  return {
    props: {
      data: zkShardingPageData,
      seo: seoData,
      config: config,
      wrapHeader: true,
    },
    revalidate: REVALIDATE,
  }
}

export default HomePage
