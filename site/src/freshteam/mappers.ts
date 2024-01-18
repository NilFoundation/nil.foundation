import { Branch, Job, JobRole, UIJob } from './types'
import { convert } from 'html-to-text'
import sanitizeHtml from 'sanitize-html'

const jobRoleMap = new Map()
const branchMap = new Map()

export const mapRawJobToUIJob = (rawJob: Job, jobRoles: JobRole[], branches: Branch[]): UIJob => {
  return {
    id: rawJob.unique_id,
    title: rawJob.title,
    plainTextDescription: convert(rawJob.description, { wordwrap: false, limits: { maxBaseElements: 200 } }),
    remote: rawJob.remote,
    type: mapTypeToDisplayType(rawJob.job_type),
    branch:
      branchMap.get(rawJob.branch_id) ??
      branchMap
        .set(
          rawJob.branch_id,
          branches.find((x) => x.id === rawJob.branch_id),
        )
        .get(rawJob.branch_id),
    department:
      jobRoleMap.get(rawJob.job_role_id) ??
      jobRoleMap
        .set(
          rawJob.job_role_id,
          jobRoles.find((x) => x.id === rawJob.job_role_id),
        )
        .get(rawJob.job_role_id),
    description: removeFreshtemStyles(rawJob.description),
  }
}

const mapTypeToDisplayType = (type: Job['job_type']): string => {
  switch (type) {
    case 2:
      return 'Full Time'
    case 1:
      return 'Part Time'
    default:
      return ''
  }
}

const removeFreshtemStyles = (html: string) =>
  sanitizeHtml(html, {
    allowedStyles: {},
  })
