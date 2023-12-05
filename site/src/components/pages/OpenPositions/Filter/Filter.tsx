import { Checkbox, Select, SELECT_SIZE } from '@nilfoundation/ui-kit'
import { PositionsFilter } from '../types'
import s from './Filter.module.scss'
import { TextFilter } from './TextFilter'

type FilterProps = {
  filter: PositionsFilter
  setFilter: (filter: PositionsFilter) => void
  departments: string[]
  locations: string[]
  types: string[]
}

export const Filter = ({ filter, setFilter, departments, locations, types }: FilterProps) => {
  const departmentsOptions = departments.map((department) => ({
    label: department,
    value: department,
  }))
  const locationsOptions = locations.map((location) => ({
    label: location,
    value: location,
  }))
  const typesOptions = types.map((type) => ({
    label: type,
    value: type,
  }))

  const selectedDepartment = filter.department ? [{ label: filter.department, value: filter.department }] : undefined
  const selectedType = filter.type ? [{ label: filter.type, value: filter.type }] : undefined
  const selectedLocation = filter.location ? [{ label: filter.location, value: filter.location }] : undefined

  return (
    <div className={s.filter}>
      <Select
        placeholder="Choose Department"
        size={SELECT_SIZE.small}
        options={departmentsOptions}
        value={selectedDepartment}
        onChange={({ value }) => {
          setFilter({ ...filter, department: value[0]?.value as string })
        }}
        searchable={false}
        valueKey="label"
      />
      <Select
        placeholder="Choose Work Type"
        size={SELECT_SIZE.small}
        options={typesOptions}
        searchable={false}
        value={selectedType}
        onChange={({ value }) => {
          setFilter({ ...filter, type: value[0]?.value as string })
        }}
      />
      <Select
        placeholder="Choose Location"
        size={SELECT_SIZE.small}
        options={locationsOptions}
        searchable={false}
        value={selectedLocation}
        onChange={({ value }) => {
          setFilter({ ...filter, location: value[0]?.value as string })
        }}
      />
      <div className={s.remoteToggleContainer}>
        <Checkbox
          checkmarkType="toggle"
          labelPlacement="left"
          checked={filter.remote}
          onChange={({ target }) => setFilter({ ...filter, remote: target.checked })}
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
