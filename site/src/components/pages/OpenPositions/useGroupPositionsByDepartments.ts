import { useMemo } from 'react'
import { Position } from 'src/freshteam/types'

export const useGroupPositionsByDepartments = (positions: Position[]) => {
  return useMemo(() => {
    const departments = positions.reduce((acc, position) => {
      const department = position.department.name
      const departmentPositions = acc[department] || []

      return {
        ...acc,
        [department]: [...departmentPositions, position],
      }
    }, {} as Record<string, Position[]>)

    return departments
  }, [positions])
}
