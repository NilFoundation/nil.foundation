export interface Salary {
  min: number | null
  max: number | null
  currency: string
}

export interface Branch {
  id: number
  created_at: string
  updated_at: string
  deleted: boolean
  name: string
  state: string
  city: string
  country_code: string
  zip: string
  time_zone: string
  currency: string
  language: string
  main_office: boolean
  date_format: string
  street: string
}

export interface Department {
  id: number
  created_at: string
  updated_at: string
  deleted: boolean
  name: string
}

export type PositionStatus = 'draft' | 'published' | 'internal' | 'private' | 'on_hold' | 'closed'

export interface Position {
  id: number
  created_at: string
  updated_at: string
  deleted: boolean
  title: string
  description: string
  status: PositionStatus
  salary: Salary
  applicant_access_type: string
  remote: boolean
  show_pursue_as_career: boolean
  closing_date: string | null
  experience: string
  type: string
  branch: Branch
  department: Department
}

export interface UIPosition {
  id: number
  title: string
  description: string
  plainTextDescription: string
  remote: boolean
  type: string
  branch: Branch
  department: string
}
