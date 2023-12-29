import { useMemo } from 'react'
import { JobRole, UIJob } from 'src/freshteam/types'

export const useGroupJobsByDepartments = (jobs: UIJob[], order?: Array<JobRole['name']>) => {
  return useMemo(() => {
    const departments = jobs.reduce((acc, job) => {
      const departmentName = job.department.name
      const departmentJobs = acc[departmentName] || []

      return {
        ...acc,
        [departmentName]: [...departmentJobs, job],
      }
    }, {} as Record<string, UIJob[]>)

    if (order) {
      const orderedDepartments = order
        .filter((x) => Object.keys(departments).includes(x))
        .reduce((acc, department) => {
          return {
            ...acc,
            [department]: departments[department],
          }
        }, {} as Record<string, UIJob[]>)

      return { ...orderedDepartments, ...departments }
    }

    return departments
  }, [jobs, order])
}
