import MetaLayout from 'components/MetaLayout/MetaLayout'
import OpenJobs from 'pages/OpenJobs'
import { REVALIDATE } from 'constants/common'
import { getSiteConfig } from 'src/strapi'

import { jobsSeoData } from 'stubs/careersPageData'
import { api } from 'src/freshteam'
import { InferGetStaticPropsType } from 'next'
import { mapRawJobToUIJob } from 'src/freshteam/mappers'

const OpenPositionsPage = ({ mappedJobs }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={jobsSeoData}>
    <OpenJobs jobsPostings={mappedJobs} />
  </MetaLayout>
)

export async function getStaticProps() {
  const getConfig = getSiteConfig
  const getJobPostings = () => api.getJobInfo()

  const [config, jobInfo] = await Promise.all([getConfig(), getJobPostings()])
  const { job_roles, jobs, branches } = jobInfo
  const mappedJobs = jobs.map((job) => mapRawJobToUIJob(job, job_roles, branches, true))

  return {
    props: {
      config,
      mappedJobs,
    },
    revalidate: REVALIDATE,
  }
}

export default OpenPositionsPage
