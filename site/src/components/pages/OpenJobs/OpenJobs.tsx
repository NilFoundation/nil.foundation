import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenJobs.module.scss'
import DottedSection from './DottedSection'
import { UIJob } from 'src/freshteam/types'
import { HeadingXLarge, HeadingXXLarge, LabelLarge, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides, getCommonHeadingOverrides, rolesCountOverrides } from './overrides'
import { useGroupJobsByDepartments } from './useGroupJobsByDepartments'
import { Filter } from './Filter/Filter'
import { useFilterJobs } from './useFilterJobs'
import { Fragment, useMemo, useState } from 'react'
import { JobsFilter } from './types'
import { Job } from './Job/Job'
import uniq from 'lodash.uniq'
import WhiteRectangleLine from 'components/WhiteRectangleLine'

type OpenJobsProps = {
  jobsPostings: UIJob[]
}

const departmensOrder = ['Engineering', 'Developer Relations', 'Marketing', 'Human Resources']

const whiteRectangleLineMarginTop = 143

const whiteRectangleLineMobileMarginTop = 60

const whiteRectangleLineMobileData = [{ id: 1, margin: 0 }]

const whiteRectangleLineData = [
  { id: 1, margin: 400, flexBasis: 275.5 },
  { id: 2, margin: 142, flexBasis: 275.5 },
  { id: 3, margin: 166, flexBasis: 267 },
  { id: 4, margin: 0, flexBasis: 267 },
]

const OpenJobs = ({ jobsPostings = [] }: OpenJobsProps) => {
  const { isMobile } = useViewport()
  const [filter, setFilter] = useState<JobsFilter>({
    department: undefined,
    location: undefined,
    type: undefined,
    title: undefined,
    remoteOnly: false,
  })

  const filteredJobsPositions = useFilterJobs(jobsPostings, filter)
  const sortedByTitleJobsPostings = filteredJobsPositions.sort((a, b) => a.title.localeCompare(b.title))
  const positionsByDepartmentMap = useGroupJobsByDepartments(sortedByTitleJobsPostings, departmensOrder)
  const departments = Object.keys(positionsByDepartmentMap)

  const availableDepartments = useMemo(
    () => uniq(jobsPostings.map((p) => p.department.name).filter((d) => !!d)),
    [jobsPostings],
  )
  const availableLocations = useMemo(
    () => uniq(jobsPostings.map((p) => p.branch.location).filter((d) => !!d)),
    [jobsPostings],
  )
  const availableTypes = useMemo(() => uniq(jobsPostings.map((p) => p.type).filter((d) => !!d)), [jobsPostings])

  return (
    <>
      <Container className={s.root}>
        {isMobile && (
          <Button className={s.btn} href="/careers">
            <Icon name="arrow-up" className={s.arrow} />
            Careers
          </Button>
        )}
        {!isMobile && (
          <StickyContainer>
            <Button className={s.btn} href="/careers">
              <Icon name="arrow-up" className={s.arrow} />
              Careers
            </Button>
          </StickyContainer>
        )}
        <div className={s.content}>
          <div className={s.wrapper}>
            <HeadingXXLarge overrides={getPageTitleOverrides()}>Open Positions</HeadingXXLarge>
            <Filter
              filter={filter}
              setFilter={setFilter}
              departments={availableDepartments}
              locations={availableLocations}
              types={availableTypes}
            />
            {departments.length === 0 && (
              <div>
                <HeadingXLarge marginTop="24px" justifyContent="center" color={PRIMITIVE_COLORS.gray300}>
                  No results
                </HeadingXLarge>
              </div>
            )}
            {departments.map((department) => {
              const jobs = positionsByDepartmentMap[department]

              return (
                <Fragment key={department}>
                  <div className={s.department}>
                    <HeadingXLarge overrides={getCommonHeadingOverrides()}>{department}</HeadingXLarge>
                    <LabelLarge color={PRIMITIVE_COLORS.gray300} overrides={rolesCountOverrides}>
                      {jobs.length === 1 ? '1 Open Role' : `${jobs.length} Open Roles`}
                    </LabelLarge>
                  </div>
                  {jobs.map((job) => {
                    return <Job key={job.id} job={job} />
                  })}
                </Fragment>
              )
            })}
          </div>
          <WhiteRectangleLine
            marginTop={isMobile ? whiteRectangleLineMobileMarginTop : whiteRectangleLineMarginTop}
            data={isMobile ? whiteRectangleLineMobileData : whiteRectangleLineData}
          />
        </div>
      </Container>
    </>
  )
}

export default OpenJobs
