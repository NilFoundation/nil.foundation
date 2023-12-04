import { useViewport } from 'hooks/useViewport'

import Container from 'components/Container'
import StickyContainer from 'components/StickyContainer'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/Button/Button'
import Icon from 'components/Icon'

import s from './OpenPositions.module.scss'
import DottedSection from './DottedSection'
import { Job } from 'src/freshteam/types'
import { HeadingXLarge, HeadingXXLarge, LabelMedium, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'
import { getPageTitleOverrides, getCommonHeadingOverrides } from './overrides'
import { useGroupPositionsByDepartments } from './useGroupPositionsByDepartments'
import { Filter } from './Filter/Filter'
import { Card } from 'components/Card'
import { useFilterPositions } from './useFilterPositions'
import { useState } from 'react'
import { PositionsFilter } from './types'

type OpenPositionsProps = {
  jobsPostings: Job[]
}

const OpenPositions = ({ jobsPostings = [] }: OpenPositionsProps) => {
  const { isMobile } = useViewport()
  const [filter, setFilter] = useState<PositionsFilter>({
    department: '',
    location: '',
    type: '',
    title: '',
    remote: true,
  })
  const filteredJobsPostings = useFilterPositions(jobsPostings, filter)
  const positionsByDepartmentMap = useGroupPositionsByDepartments(filteredJobsPostings)
  const departments = Object.keys(positionsByDepartmentMap)

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
            />
            {departments.length === 0 && (
              <div>
                <LabelMedium color={PRIMITIVE_COLORS.gray300}>No results</LabelMedium>
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
                    return (
                      <Card
                        key={position.id}
                        className={s.position}
                      />
                    )
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
