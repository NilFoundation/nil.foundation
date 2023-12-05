import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenPositions.module.scss'
import DottedSection from './DottedSection'
import { UIPosition } from 'src/freshteam/types'
import { HeadingXLarge, HeadingXXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides, getCommonHeadingOverrides } from './overrides'
import { useGroupPositionsByDepartments } from './useGroupPositionsByDepartments'
import { Filter } from './Filter/Filter'
import { useFilterPositions } from './useFilterPositions'
import { useState } from 'react'
import { PositionsFilter } from './types'
import { Position } from './Position/Position'
import { mapTypeToDisplayType } from './utils/mapTypeToDisplayType'
import uniq from 'lodash.uniq'

type OpenPositionsProps = {
  jobsPostings: UIPosition[]
}

const departmensOrder = ['Engineering', 'Developer Relations', 'Marketing', 'Human Resources']

const OpenPositions = ({ jobsPostings = [] }: OpenPositionsProps) => {
  const { isMobile } = useViewport()
  const [filter, setFilter] = useState<PositionsFilter>({
    department: '',
    location: '',
    type: '',
    title: '',
    remote: true,
  })

  const filteredJobsPositions = useFilterPositions(jobsPostings, filter)
  const sortedByTitleJobsPostings = filteredJobsPositions.sort((a, b) => a.title.localeCompare(b.title))
  const positionsByDepartmentMap = useGroupPositionsByDepartments(sortedByTitleJobsPostings, departmensOrder)
  const departments = Object.keys(positionsByDepartmentMap)

  const availableDepartments = uniq(jobsPostings.map((p) => p.department).filter((d) => !!d))
  const availableLocations = uniq(jobsPostings.map((p) => p.branch.city).filter((d) => !!d))
  const availableTypes = uniq(jobsPostings.map((p) => mapTypeToDisplayType(p.type)).filter((d) => !!d))

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
              const positions = positionsByDepartmentMap[department]

              return (
                <>
                  <div key={department} className={s.department}>
                    <HeadingXLarge overrides={getCommonHeadingOverrides()}>{department}</HeadingXLarge>
                    <LabelMedium color={PRIMITIVE_COLORS.gray300}>
                      {positions.length === 1 ? '1 Open Role' : `${positions.length} Open Roles`}
                    </LabelMedium>
                  </div>
                  {positions.map((position) => {
                    return <Position key={position.id} position={position} />
                  })}
                </>
              )
            })}
          </div>
          <DottedSection />
        </div>
      </Container>
    </>
  )
}

export default OpenPositions
