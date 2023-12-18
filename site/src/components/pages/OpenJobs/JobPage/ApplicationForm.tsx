import {
  Button,
  FormControl,
  HeadingLarge,
  HeadingMedium,
  Input,
  LabelMedium,
  PRIMITIVE_COLORS,
} from '@nilfoundation/ui-kit'
import s from './Styles.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import formValidationSchema, { ApplicationFormData } from './formValidationSchema'
import FileInput from '../FileInput/FileInput'

const ApplicationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid, isValidating },
  } = useForm<ApplicationFormData>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(formValidationSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const partialRegister = (name: keyof ApplicationFormData) => {
    const { min, max, ...rest } = register(name)
    return rest
  }

  return (
    <form className={s.wrapper} onSubmit={onSubmit}>
      <HeadingLarge marginTop="32px" marginBottom="32px">
        Submit Your Application
      </HeadingLarge>
      <div>
        <LabelMedium>Send resume as a file</LabelMedium>
        <LabelMedium color={PRIMITIVE_COLORS.gray300} marginBottom="16px">
          Attach resume in <span className={s.lightText}>docx</span>, <span className={s.lightText}>doc</span>,{' '}
          <span className={s.lightText}>pdf</span> to apply for this vacancy.
        </LabelMedium>
        <FileInput {...partialRegister('file')} />
      </div>
      <div className={s.form}>
        <FormControl label="Name" error={!!errors.name}>
          <Input placeholder="Name" type="text" {...partialRegister('name')} />
        </FormControl>
        {errors.name && <ErrorMessage message={errors.name.message} />}
        <FormControl label="Surname" error={!!errors.surname}>
          <Input placeholder="Surname" type="text" {...partialRegister('surname')} />
        </FormControl>
        {errors.surname && <ErrorMessage message={errors.surname.message} />}
        <FormControl label="Email *" error={!!errors.email}>
          <Input placeholder="candidate@mail.com" type="email" {...partialRegister('email')} />
        </FormControl>
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <FormControl label="Social Network and Web Links">
          <Input placeholder="Link" type="text" />
        </FormControl>
      </div>
      <Button type="submit" disabled={isSubmitting || !isDirty || !isValid || !isValidating} isLoading={isSubmitting}>
        Submit application
      </Button>
    </form>
  )
}

export default ApplicationForm

const ErrorMessage = ({ message }: { message?: string }) => (
  <LabelMedium color={PRIMITIVE_COLORS.red500}>{message}</LabelMedium>
)

const SubmitSuccessfulMessage = () => {
  return (
    <div>
      <HeadingMedium>Application sent</HeadingMedium>
      <LabelMedium color={PRIMITIVE_COLORS.gray300}>
        Thank you for your application, our HR team will contact you within the{' '}
        <span className={s.lightText}>next 7 days.</span>
      </LabelMedium>
    </div>
  )
}
