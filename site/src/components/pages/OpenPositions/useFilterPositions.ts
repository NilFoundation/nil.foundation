import { UIPosition } from 'src/freshteam/types'
import { PositionsFilter } from './types'

export const useFilterPositions = (positions: UIPosition[], filter: PositionsFilter) => {
  const filteredPositions = positions.filter((position) => {
    const titleFilter = filter.title ? position.title.toLowerCase().includes(filter.title.toLowerCase()) : true
    const departmentFilter = filter.department
      ? position.department.toLowerCase() === filter.department.toLowerCase()
      : true
    const remoteFilter = filter.remoteOnly ? position.remote === true : true
    const typeFilter = filter.type ? position.type.toLowerCase() === filter.type.toLowerCase() : true
    const locationFilter = filter.location ? position.branch.city.toLowerCase() === filter.location.toLowerCase() : true

    return titleFilter && departmentFilter && remoteFilter && typeFilter && locationFilter
  })

  return filteredPositions
}
