import { Position, UIPosition, UIPositionWithoutDescription } from './types'
import { convert } from 'html-to-text'

export const mapPositionToUIPosition = <T extends boolean>(position: Position, includeDescription: T) => {
  return {
    id: position.id,
    title: position.title,
    description: includeDescription ? position.description : undefined,
    plainTextDescription: convert(position.description, { wordwrap: false, limits: { maxBaseElements: 200 } }),
    remote: position.remote,
    type: mapTypeToDisplayType(position.type),
    branch: position.branch,
    department: position.department.name,
  } as T extends true ? UIPosition : UIPositionWithoutDescription
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
