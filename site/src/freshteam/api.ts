import { client } from './client'
import { mapPositionToUIPosition } from './mappers'
import { PositionStatus, UIPosition } from './types'

interface Api {
  getJobPostings(s: PositionStatus): Promise<UIPosition[]>
}

export const api = {
  getJobPostings: async (status?: PositionStatus): Promise<UIPosition[]> => {
    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    const result = await client.get(url).then((res) => res)

    return result.data.map(mapPositionToUIPosition)
  },
} satisfies Api
