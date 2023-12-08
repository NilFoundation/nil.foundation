import MetaLayout from 'components/MetaLayout/MetaLayout'
import OpenPositions, { PositionPage } from 'pages/OpenPositions'
import { REVALIDATE } from 'constants/common'
import { getSiteConfig } from 'src/strapi'

import { jobsSeoData } from 'stubs/careersPageData'
import { api } from 'src/freshteam'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import NotFound from 'pages/NotFound'

const OpenPositionsPage = ({ jobsPostings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {query} = useRouter()
  const jobId = query.jobId
  const jobToDisplay = jobsPostings.find(x => x.id.toString() === jobId)

  if (query.jobId) {
    return (
      <MetaLayout seo={jobsSeoData}>
        {jobToDisplay ? <PositionPage position={jobToDisplay} /> : <NotFound />}
      </MetaLayout>
    )
  }

  return (
  <MetaLayout seo={jobsSeoData}>
    <OpenPositions jobsPostings={jobsPostings} />
  </MetaLayout>
)}

export async function getStaticProps() {
  const getConfig = getSiteConfig
  const getJobPostings = () => api.getJobPostings('published')

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
