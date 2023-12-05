import { Position } from 'src/freshteam/types'

export const mapTypeToDisplayType = (type: Position['type']): string => {
  switch (type) {
    case 'full_time':
      return 'Full Time'
    case 'part_time':
      return 'Part Time'
    default:
      return ''
  }
}
