import { REVALIDATE } from 'constants/index'

import ZkSharding from 'pages/ZkSharding'
import MetaLayout from 'components/MetaLayout'

import { getSiteConfig } from 'src/strapi/getSiteConfig'
import { InferGetStaticPropsType } from 'next'
import { zkShardingPageData, seoData } from 'stubs/zkShardingPageData'

const HomePage = ({ data, seo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MetaLayout seo={seo}>
      <ZkSharding data={data} />
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
    },
    revalidate: REVALIDATE,
  }
}

export default HomePage
