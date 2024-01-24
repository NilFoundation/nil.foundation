import { Checkbox, Select } from '@nilfoundation/ui-kit'
import { JobsFilter } from '../types'
import s from './Filter.module.scss'
import { TextFilter } from './TextFilter'

type FilterProps = {
  filter: JobsFilter
  setFilter: (filter: JobsFilter) => void
  departments: string[]
  locations: string[]
  types: string[]
}

export const Filter = ({ filter, setFilter, departments, locations, types }: FilterProps) => {
  const departmentsOptions = departments.map((department) => ({
    label: department,
    id: department,
  }))
  const locationsOptions = locations.map((location) => ({
    label: location,
    id: location,
  }))
  const typesOptions = types.map((type) => ({
    label: type,
    id: type,
  }))

  const selectedDepartment = filter.department ? [{ label: filter.department, id: filter.department }] : undefined
  const selectedType = filter.type ? [{ label: filter.type, id: filter.type }] : undefined
  const selectedLocation = filter.location ? [{ label: filter.location, id: filter.location }] : undefined

  return (
    <div className={s.filter}>
      <Select
        placeholder="Choose Department"
        options={departmentsOptions}
        value={selectedDepartment}
        onChange={({ value }) => {
          setFilter({ ...filter, department: value[0]?.id as string })
        }}
        searchable={false}
        valueKey="label"
      />
      <Select
        placeholder="Choose Work Type"
        options={typesOptions}
        searchable={false}
        value={selectedType}
        onChange={({ value }) => {
          setFilter({ ...filter, type: value[0]?.id as string })
        }}
      />
      <Select
        placeholder="Choose Location"
        options={locationsOptions}
        searchable={false}
        value={selectedLocation}
        onChange={({ value }) => {
          setFilter({ ...filter, location: value[0]?.id as string })
        }}
        disabled={filter.remoteOnly}
      />
      <div className={s.remoteToggleContainer}>
        <Checkbox
          checkmarkType="toggle"
          labelPlacement="left"
          checked={filter.remoteOnly && filter.location === undefined}
          onChange={({ target }) => setFilter({ ...filter, remoteOnly: target.checked })}
          disabled={filter.location !== undefined}
        >
          Remote only
        </Checkbox>
      </div>
      <div className={s.titleTitleFilterContainer}>
        <TextFilter setFilterValue={(value) => setFilter({ ...filter, title: value })} />
      </div>
    </div>
  )
}
