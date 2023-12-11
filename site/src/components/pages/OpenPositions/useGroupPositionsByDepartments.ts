import { useMemo } from 'react'
import { UIPositionWithoutDescription } from 'src/freshteam/types'

export const useGroupPositionsByDepartments = (
  positions: UIPositionWithoutDescription[],
  order?: Array<UIPositionWithoutDescription['department']>,
) => {
  return useMemo(() => {
    const departments = positions.reduce((acc, position) => {
      const department = position.department
      const departmentPositions = acc[department] || []

      return {
        ...acc,
        [department]: [...departmentPositions, position],
      }
    }, {} as Record<string, UIPositionWithoutDescription[]>)

    if (order) {
      const orderedDepartments = order
        .filter((x) => Object.keys(departments).includes(x))
        .reduce((acc, department) => {
          return {
            ...acc,
            [department]: departments[department],
          }
        }, {} as Record<string, UIPositionWithoutDescription[]>)

      return { ...orderedDepartments, ...departments }
    }

    return departments
  }, [positions, order])
}
