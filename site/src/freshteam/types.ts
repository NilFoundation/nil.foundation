export interface Salary {
  min: number | null
  max: number | null
  currency: string
}

export interface Branch {
  id: number
  account_id: number
  name: string
  street: string | null
  city: string
  state: string
  country_code: string
  zip: string | null
  time_zone: string
  contact_info: Record<string, any>
  currency: string
  main_office: boolean
  deleted: boolean
  language: string
  location: string
  date_format: string
}

export interface JobRole {
  id: number
  name: string
  deleted: boolean
}

export type PositionStatus = 'draft' | 'published' | 'internal' | 'private' | 'on_hold' | 'closed'

export interface Job {
  id: number
  title: string
  description: string
  no_of_openings: number | null
  job_type: number
  status: number
  position_level: string | null
  ctc_details: string | null
  deleted: boolean
  closing_date: string | null
  created_at: string
  show_position_in_portal: boolean | null
  url: string
  unique_id: string
  show_ctc_in_portal: boolean | null
  remote: boolean
  skip_assign_requisition_for_applicants: boolean | null
  branch_id: number
  jt_job_id: string | null
  custom_field_attributes: Record<string, any>
  preferred_remote_job_locations: string
  job_role_id: number
}

export interface UIJob {
  id: string
  title: string
  description: string
  plainTextDescription: string
  remote: boolean
  type: string
  branch: Branch
  department: JobRole
}

export type UIJobOverview = Omit<UIJob, 'description'>

export type JobInfo = {
  jobs: Job[]
  branches: Branch[]
  job_roles: JobRole[]
}
