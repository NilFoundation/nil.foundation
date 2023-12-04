import MetaLayout from 'components/MetaLayout/MetaLayout'
import OpenPositions from 'pages/OpenPositions'
import { REVALIDATE } from 'constants/common'
import { getSiteConfig } from 'src/strapi'

import { jobsSeoData } from 'stubs/careersPageData'
import { api } from 'src/freshteam'
import { InferGetStaticPropsType } from 'next'

const OpenPositionsPage = ({ jobsPostings }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={jobsSeoData}>
    <OpenPositions jobsPostings={jobsPostings} />
  </MetaLayout>
)

export async function getStaticProps() {
  const getConfig = getSiteConfig
  const getJobPostings = api.getJobPostings

  const [config, jobsPostings] = await Promise.all([getConfig(), getJobPostings()])

  return {
    props: {
      config,
      jobsPostings,
    },
    revalidate: REVALIDATE,
  }
}

export default OpenPositionsPage
