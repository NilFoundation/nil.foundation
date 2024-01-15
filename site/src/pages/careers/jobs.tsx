import MetaLayout from 'components/MetaLayout/MetaLayout'
import OpenPositions from 'pages/OpenPositions'
import { REVALIDATE } from 'constants/common'
import { getSiteConfig } from 'src/strapi'

import { jobsSeoData } from 'stubs/careersPageData'

const OpenPositionsPage = () => (
  <MetaLayout seo={jobsSeoData}>
    <OpenPositions />
  </MetaLayout>
)

export async function getStaticProps() {
  const config = await getSiteConfig()
  return {
    props: { config },
    revalidate: REVALIDATE,
  }
}

export default OpenPositionsPage
