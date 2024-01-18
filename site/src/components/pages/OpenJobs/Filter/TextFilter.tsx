import type { ReactElement } from 'react'
import { useState, useRef, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { INPUT_SIZE, Input, SearchIcon } from '@nilfoundation/ui-kit'

type TextFilterProps = {
  setFilterValue: (value: string) => void
}

export const TextFilter = ({ setFilterValue }: TextFilterProps): ReactElement => {
  const [value, setValue] = useState('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value) => {
      setFilterValue(value ?? '')
    }, 200),
    [setFilterValue],
  )

  return (
    <Input
      placeholder="Search Job Title"
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
