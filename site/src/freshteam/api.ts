import { client } from './client'
import { Job, JobStatus } from './types'

interface Api {
  getJobPostings(s: JobStatus): Promise<Job[]>
}

export const api = {
  getJobPostings: async (status?: JobStatus) => {
    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    //return await client.get<JobStatus, Job[]>(url).then((res) => res)
    return []
  },
} satisfies Api
