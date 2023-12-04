import { Branch, Department, Job } from 'src/freshteam/types'

export interface PositionsFilter {
  title: Job['title']
  department: Department['name']
  remote: Job['remote']
  type: Job['type']
  location: Branch['city']
}
