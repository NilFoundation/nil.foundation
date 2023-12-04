import { Job } from 'src/freshteam/types'

export const useGroupPositionsByDepartments = (positions: Job[]) => {
  const departments = positions.reduce((acc, position) => {
    const department = position.department.name
    const departmentPositions = acc[department] || []

    return {
      ...acc,
      [department]: [...departmentPositions, position],
    }
  }, {} as Record<string, Job[]>)

  return departments
}
