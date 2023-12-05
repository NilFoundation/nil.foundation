import { Checkbox, Select, SELECT_SIZE } from '@nilfoundation/ui-kit'
import { PositionsFilter } from '../types'
import { produce } from 'immer'
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
  const setFilterValue = (key: keyof PositionsFilter, value: PositionsFilter[typeof key]) =>
    setFilter(
      produce(filter, (draft) => {
        (draft[key] as PositionsFilter[typeof key]) = value
      }),
    )

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

  return (
    <div className={s.filter}>
      <Select
        placeholder="Choose Department"
        size={SELECT_SIZE.small}
        options={departmentsOptions}
        onChange={({ value }) => setFilterValue('department', "Marketing")}
        searchable={false}
      />
      <Select placeholder="Choose Work Type" size={SELECT_SIZE.small} options={typesOptions} searchable={false} />
      <Select placeholder="Choose Location" size={SELECT_SIZE.small} options={locationsOptions} searchable={false} />
      <div className={s.remoteToggleContainer}>
        <Checkbox
          checkmarkType="toggle"
          labelPlacement="left"
          checked={filter.remote}
          onChange={({ target }) => setFilterValue('remote', target.checked)}
        >
          Remote only
        </Checkbox>
      </div>
      <div className={s.titleTitleFilterContainer}>
        <TextFilter setFilterValue={(value) => setFilterValue('title', value)} />
      </div>
    </div>
  )
}
