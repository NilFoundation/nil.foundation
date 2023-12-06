import { client } from './client'
import { mapPositionToUIPosition } from './mappers'
import { PositionStatus, UIPosition } from './types'

const USE_MOCK = !!process.env.USE_MOCK || false

class Api {
  public async getJobPostings(status?: PositionStatus): Promise<UIPosition[]> {
    if (USE_MOCK) {
      return []
    }

    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    const result = await client.get(url).then((res) => res)

    return result.data.map(mapPositionToUIPosition)
  }
  public async getAllPositionPages(): Promise<number[]> {
    if (USE_MOCK) {
      return []
    }

    const result = await this.getJobPostings()

    return result.map((x) => x.id)
  }
}

export const api = new Api()
