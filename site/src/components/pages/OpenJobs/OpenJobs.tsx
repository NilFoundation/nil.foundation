import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenJobs.module.scss'
import DottedSection from './DottedSection'
import { UIJobOverview } from 'src/freshteam/types'
import { HeadingXLarge, HeadingXXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides, getCommonHeadingOverrides } from './overrides'
import { useGroupJobsByDepartments } from './useGroupJobsByDepartments'
import { Filter } from './Filter/Filter'
import { useFilterJobs } from './useFilterJobs'
import { Fragment, useMemo, useState } from 'react'
import { JobsFilter } from './types'
import { Job } from './Job/Job'
import uniq from 'lodash.uniq'

type OpenJobsProps = {
  jobsPostings: UIJobOverview[]
}

const departmensOrder = ['Engineering', 'Developer Relations', 'Marketing', 'Human Resources']

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
            <WhiteRectangle />
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
                    <LabelMedium color={PRIMITIVE_COLORS.gray300}>
                      {jobs.length === 1 ? '1 Open Role' : `${jobs.length} Open Roles`}
                    </LabelMedium>
                  </div>
                  {jobs.map((job) => {
                    return <Job key={job.id} job={job} />
                  })}
                </Fragment>
              )
            })}
          </div>
          <DottedSection />
        </div>
      </Container>
    </>
  )
}

export default OpenJobs
