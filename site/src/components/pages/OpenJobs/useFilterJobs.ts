import { UIJob } from 'src/freshteam/types'
import { JobsFilter } from './types'

export const useFilterJobs = (positions: UIJob[], filter: JobsFilter) => {
  const filteredPositions = positions.filter((position) => {
    const titleFilter = filter.title ? position.title.toLowerCase().includes(filter.title.toLowerCase()) : true
    const departmentFilter = filter.department
      ? position.department.name.toLowerCase() === filter.department.toLowerCase()
      : true
    const remoteFilter = filter.remoteOnly ? position.remote === true : true
    const typeFilter = filter.type ? position.type.toLowerCase() === filter.type.toLowerCase() : true
    const locationFilter = filter.location ? position.branch.city.toLowerCase() === filter.location.toLowerCase() : true

    return titleFilter && departmentFilter && remoteFilter && typeFilter && locationFilter
  })

  return filteredPositions
}
