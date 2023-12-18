import { z } from 'zod'

const requiredFields = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required').max(50, 'Too Long!'),
})

const optionalFields = z
  .object({
    name: z.string().min(1, 'Name is required').max(50, 'Too Long!'),
    surname: z.string().max(500, 'Too Long!'),
    telegram: z.string().startsWith('@', 'Invalid telegram nickname').max(50, 'Too Long!'),
    tel: z.string().max(50, 'Too Long!'),
    file: z.string().max(50, 'Too Long!'),
  })
  .partial()

const formValidationSchema = requiredFields.and(optionalFields)

export type ApplicationFormData = z.infer<typeof formValidationSchema>

export default formValidationSchema
