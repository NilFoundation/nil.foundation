import { Branch, Department, Position } from 'src/freshteam/types'

export interface PositionsFilter {
  title?: Position['title']
  department?: Department['name']
  remoteOnly: Position['remote']
  type?: Position['type']
  location?: Branch['city']
}
