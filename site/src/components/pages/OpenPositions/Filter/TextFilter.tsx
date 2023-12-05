import type { ReactElement } from 'react'
import { useState, useRef } from 'react'
import debounce from 'lodash.debounce'
import { INPUT_SIZE, Input, SearchIcon } from '@nilfoundation/ui-kit'

type TextFilterProps = {
  setFilterValue: (value: string) => void
}

export const TextFilter = ({ setFilterValue }: TextFilterProps): ReactElement => {
  const [value, setValue] = useState('')
  const debouncedSearch = useRef(
    debounce((value) => {
      setFilterValue(value ?? '')
    }, 200),
  ).current

  return (
    <Input
      placeholder="Search by title"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
      }}
      startEnhancer={<SearchIcon />}
      size={INPUT_SIZE.small}
    />
  )
}
