import { client } from './client'
import { Job, JobInfo } from './types'

const USE_MOCK = !!process.env.USE_MOCK || false

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

    const result = await client.get(`/jobs/${id}.json`).then((res) => res)

    return result.data?.job ?? null
  }
  public async getAllPositionPages(): Promise<number[]> {
    if (USE_MOCK) {
      return []
    }

    const result = await this.getJobInfo()

    return result.jobs.map((x) => x.id)
  }
}

export const api = new Api()
