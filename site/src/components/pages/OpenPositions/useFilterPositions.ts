import { Job } from 'src/freshteam/types'
import { PositionsFilter } from './types'

export const useFilterPositions = (positions: Job[], filter: PositionsFilter) => {
  const filteredPositions = positions.filter((position) => {
    const titleFilter = filter.title ? position.title === filter.title : true
    const departmentFilter = filter.department ? position.department.name === filter.department : true
    const remoteFilter = filter.remote ? position.remote === filter.remote : true
    const typeFilter = filter.type ? position.type === filter.type : true
    const locationFilter = filter.location ? position.branch.city === filter.location : true

    return titleFilter && departmentFilter && remoteFilter && typeFilter && locationFilter
  })

  return filteredPositions
}
