import { client } from './client'
import { mapPositionToUIPosition } from './mappers'
import { PositionStatus, UIPosition } from './types'

interface Api {
  getJobPostings(s: PositionStatus): Promise<UIPosition[]>
}

const USE_MOCK = !!process.env.USE_MOCK || false

export const api = {
  getJobPostings: async (status?: PositionStatus): Promise<UIPosition[]> => {
    if (USE_MOCK) {
      return []
    }
    
    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    const result = await client.get(url).then((res) => res)

    return result.data.map(mapPositionToUIPosition)
  },
} satisfies Api
