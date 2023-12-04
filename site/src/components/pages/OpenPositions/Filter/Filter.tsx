import { Checkbox, Select, Input, SearchIcon } from '@nilfoundation/ui-kit'
import { PositionsFilter } from '../types'
import s from './Filter.module.scss'

type FilterProps = {
  filter: PositionsFilter
  setFilter: (filter: PositionsFilter) => void
}

export const Filter = ({ filter, setFilter }: FilterProps) => {
  return (
    <div className={s.filter}>
        <Select />
        <Select />
        <Select />
        <div className={s.remoteToggleContainer}>
          <Checkbox
          checkmarkType="toggle"
          labelPlacement="left"
          checked={filter.remote}
        >
          Remote only
        </Checkbox>
        </div>
        <div className={s.titleTitleFilterContainer}>
          <Input    
            placeholder="Search Job Title"
            startEnhancer={<SearchIcon />}
          />
        </div>
    </div>
  )
}
