import { client } from './client'
import { Job, JobInfo } from './types'

const USE_MOCK = false

class Api {
  public async getJobInfo(): Promise<JobInfo> {
    if (USE_MOCK) {
      return {
        jobs: [],
        branches: [],
        job_roles: [],
      }
    }

    const result = await client.get<JobInfo>('/jobs.json').then((res) => res)

    return result.data
  }
  public async getJobById(id: string): Promise<Job | null> {
    if (USE_MOCK) {
      return null
    }

    const allJobs = (await this.getJobInfo()).jobs
    const job = allJobs.find((x) => x.unique_id === id)

    if (!job) {
      return null
    }

    const result = await client.get(`/jobs/${job.id}.json`).then((res) => res)

    return result.data?.job ?? null
  }
  public async getAllPositionPages(): Promise<string[]> {
    if (USE_MOCK) {
      return []
    }

    const result = await this.getJobInfo()

    return result.jobs.map((x) => x.unique_id)
  }
}

export const api = new Api()
