import { useMemo } from 'react'
import { UIPosition } from 'src/freshteam/types'

export const useGroupPositionsByDepartments = (positions: UIPosition[], order?: Array<UIPosition['department']>) => {
  return useMemo(() => {
    const departments = positions.reduce((acc, position) => {
      const department = position.department
      const departmentPositions = acc[department] || []

      return {
        ...acc,
        [department]: [...departmentPositions, position],
      }
    }, {} as Record<string, UIPosition[]>)

    if (order) {
      return order
        .filter((x) => Object.keys(departments).includes(x))
        .reduce((acc, department) => {
          return {
            ...acc,
            [department]: departments[department],
          }
        }, {} as Record<string, UIPosition[]>)
    }

    return departments
  }, [positions, order])
}
