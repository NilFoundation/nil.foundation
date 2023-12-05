import { Position, UIPosition } from './types'
import { convert } from 'html-to-text'

export const mapPositionToUIPosition = (position: Position): UIPosition => {
  return {
    id: position.id,
    title: position.title,
    description: position.description,
    plainTextDescription: convert(position.description, { wordwrap: false, limits: { maxBaseElements: 200 } }),
    remote: position.remote,
    type: position.type,
    branch: position.branch,
    department: position.department.name,
  }
}
