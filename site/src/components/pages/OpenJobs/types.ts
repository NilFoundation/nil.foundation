import { Branch, UIJob } from 'src/freshteam/types'

export interface JobsFilter {
  title?: UIJob['title']
  department?: UIJob['department']['name']
  remoteOnly: UIJob['remote']
  type?: UIJob['type']
  location?: Branch['city']
}
