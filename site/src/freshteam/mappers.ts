import { Position, UIPosition } from './types'
import { convert } from 'html-to-text'

export const mapPositionToUIPosition = (position: Position): UIPosition => {
  return {
    id: position.id,
    title: position.title,
    description: position.description,
    plainTextDescription: convert(position.description, { wordwrap: false, limits: { maxBaseElements: 200 } }),
    remote: position.remote,
    type: mapTypeToDisplayType(position.type),
    branch: position.branch,
    department: position.department.name,
  }
}

const mapTypeToDisplayType = (type: Position['type']): string => {
  switch (type) {
    case 'full_time':
      return 'Full Time'
    case 'part_time':
      return 'Part Time'
    default:
      return ''
  }
}
