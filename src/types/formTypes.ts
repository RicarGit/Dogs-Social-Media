import { z } from "zod"

const usernameSchema = z.object({
  username: z.string()
    .nonempty('Digite um nome de usuário.')
    .toLowerCase()
    .trim()
    .min(3, 'Utilize no mínimo 3 caracteres.')
    .max(30, 'Utilize no máximo 10 caracteres.')
})

export const passwordSchema = z.object({
  password: z.string()
    .nonempty('Digite uma senha.')
    .toLowerCase()
    .trim()
    .min(3, 'Utilize no mínimo 3 caracteres.')
    .max(15, 'Utilize no máximo 10 caracteres.')
})

export const emailSchema = z.object({
  email: z.string().email('Digite um email válido.')
})

const formInputSchema = z.object({
  name: z.string(),
  label: z.string().min(3).max(10),
  type: z.string(),
  error: z.string().or(z.undefined())
}).required()

export const photoPostSchema = z.object({
  name: z.string(),
  weight: z.number(),
  age: z.number(),
  image: z.instanceof(FileList)
})

export const loginFormSchema = passwordSchema.merge(usernameSchema)
export const loginCreateSchema = loginFormSchema.merge(emailSchema)

export type FormInputProps = z.infer<typeof formInputSchema>
export type FormPasswordType = z.infer<typeof passwordSchema>
export type FormEmailType = z.infer<typeof emailSchema>
export type LoginFormType = z.infer<typeof loginFormSchema>
export type LoginCreateFormType = z.infer<typeof loginCreateSchema>
export type PhotoPostFormType = z.infer<typeof photoPostSchema>

export type FormInputTypes =
  | FormPasswordType
  | FormEmailType
  | LoginFormType
  | LoginCreateFormType
  | PhotoPostFormType 