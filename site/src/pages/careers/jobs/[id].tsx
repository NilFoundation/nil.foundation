import MetaLayout from 'components/MetaLayout/MetaLayout'
import { getSiteConfig } from 'src/strapi'

import { api } from 'src/freshteam'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { JobPage as JobPageComponent } from 'pages/OpenJobs'
import { mapRawJobToUIJob } from 'src/freshteam/mappers'

const PositionPage = ({ mappedJob, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <JobPageComponent job={mappedJob} />
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const id = params?.id

  if (!id) {
    return {
      notFound: true,
    }
  }

  const getConfig = getSiteConfig
  const getJobPosting = () => api.getJobById(id)
  const getJobInfo = api.getJobInfo

  const [config, jobPosting, jobInfo] = await Promise.all([getConfig(), getJobPosting(), getJobInfo()])

  if (!jobPosting) {
    return {
      notFound: true,
    }
  }

  const { job_roles, branches } = jobInfo
  const mappedJob = mapRawJobToUIJob(jobPosting, job_roles, branches, false)

  return {
    props: {
      config,
      mappedJob,
      seo: {
        title: mappedJob.title,
        description: mappedJob.plainTextDescription,
      },
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = await api.getAllPositionPages()

  return {
    paths: paths.map((x) => ({ params: { id: x.toString() } })),
    fallback: 'blocking',
  }
}

export default PositionPage
