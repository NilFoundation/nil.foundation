import MetaLayout from 'components/MetaLayout'
import { REVALIDATE } from 'constants/common'
import { InferGetStaticPropsType } from 'next'
import ProofMarket from 'pages/ProofMarket'
import React from 'react'
import { getSiteConfig } from 'src/strapi'
import { homePageData, seoData } from 'stubs/homePageData'

const ProofMarketPage = ({ seo, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MetaLayout seo={seo}>
      <ProofMarket data={data} />
    </MetaLayout>
  )
}

export async function getStaticProps() {
  const config = await getSiteConfig()
  return {
    props: { data: homePageData, seo: seoData, config },
    revalidate: REVALIDATE,
  }
}

export default ProofMarketPage
