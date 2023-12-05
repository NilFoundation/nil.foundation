import { client } from './client'
import { Position, PositionStatus } from './types'

interface Api {
  getJobPostings(s: PositionStatus): Promise<Position[]>
}

export const api = {
  getJobPostings: async (status?: PositionStatus): Promise<Position[]> => {
    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    const result = await client.get(url).then((res) => res)
    console.log(Array.isArray(result), Object.keys(result))
    return result.data
  },
} satisfies Api
