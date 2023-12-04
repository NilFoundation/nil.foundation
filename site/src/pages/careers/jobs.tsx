import MetaLayout from 'components/MetaLayout/MetaLayout'
import OpenPositions from 'pages/OpenPositions'
import { REVALIDATE } from 'constants/common'
import { getSiteConfig } from 'src/strapi'

import { jobsSeoData } from 'stubs/careersPageData'
import { api } from 'src/freshteam'

const OpenPositionsPage = () => (
  <MetaLayout seo={jobsSeoData}>
    <OpenPositions />
  </MetaLayout>
)

export async function getStaticProps() {
  const config = await getSiteConfig()

  try {
    const jobsPostings = await api.getJobPostings();
      console.log((jobsPostings as any).data.errors);
  } catch (error) {
    console.log(error);
  }
  return {
    props: { config },
    revalidate: REVALIDATE,
  }
}

export default OpenPositionsPage
