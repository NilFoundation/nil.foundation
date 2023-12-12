import { useMemo } from 'react'
import { JobRole, UIJobOverview } from 'src/freshteam/types'

export const useGroupJobsByDepartments = (jobs: UIJobOverview[], order?: Array<JobRole['name']>) => {
  return useMemo(() => {
    const departments = jobs.reduce((acc, job) => {
      const departmentName = job.department.name
      const departmentJobs = acc[departmentName] || []

      return {
        ...acc,
        [departmentName]: [...departmentJobs, job],
      }
    }, {} as Record<string, UIJobOverview[]>)

    if (order) {
      const orderedDepartments = order
        .filter((x) => Object.keys(departments).includes(x))
        .reduce((acc, department) => {
          return {
            ...acc,
            [department]: departments[department],
          }
        }, {} as Record<string, UIJobOverview[]>)

      return { ...orderedDepartments, ...departments }
    }

    return departments
  }, [jobs, order])
}
