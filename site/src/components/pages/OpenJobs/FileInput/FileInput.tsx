import { Input } from '@nilfoundation/ui-kit'
import { forwardRef } from 'react'
import { inputOverrids } from './overrides'
import s from './FileInput.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'
import Icon from 'components/Icon'

type FileInputProps = Omit<UseFormRegisterReturn<any>, 'ref'>

const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const placeholder = 'Attach file'
  return (
    <div className={s.container}>
      <div className={s.inputsContainer}>
        <input
          className={s.input}
          type="file"
          {...props}
          ref={ref}
          accept="application/pdf,application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <Input overrides={inputOverrids} placeholder={placeholder} readOnly endEnhancer={<Icon name="upload" />} />
      </div>
    </div>
  )
})

FileInput.displayName = 'FileInput'
export default FileInput
