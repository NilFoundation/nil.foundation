import { client } from './client'
import { mapPositionToUIPosition } from './mappers'
import { Position, PositionStatus, UIPosition, UIPositionWithoutDescription } from './types'

const USE_MOCK = !!process.env.USE_MOCK || false

class Api {
  public async getJobPostings(status?: PositionStatus): Promise<UIPositionWithoutDescription[]> {
    if (USE_MOCK) {
      return []
    }

    let url = 'job_postings'

    if (status) {
      url += `?status=${status}`
    }

    const result = await client.get<Position[]>(url).then((res) => res)

    return result.data.map((x) => mapPositionToUIPosition(x, false))
  }
  public async getJobPosting(id: string): Promise<UIPosition | null> {
    if (USE_MOCK) {
      return null
    }

    const result = await client.get(`job_postings/${id}`).then((res) => res)

    return mapPositionToUIPosition(result.data, true)
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
