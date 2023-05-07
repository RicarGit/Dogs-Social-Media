import { z } from "zod"
import { FieldValues, UseFormRegister } from "react-hook-form"

const formInputSchema = z.object({
  name: z.string(),
  label: z.string().min(3).max(10),
  type: z.string(),
  error: z.string().or(z.undefined())
}).required()

export const loginFormSchema = z.object({
  username: z.string()
    .nonempty('Digite algum valor.')
    .toLowerCase()
    .trim()
    .min(3, 'Utilize no mínimo 3 caracteres.')
    .max(10, 'Utilize no máximo 10 caracteres.'),
  password: z.string()
    .nonempty('Digite algum valor.')
    .toLowerCase()
    .trim()
    .min(3, 'Utilize no mínimo 3 caracteres.')
    .max(10, 'Utilize no máximo 10 caracteres.')
})

export type RegisterType<T extends FieldValues> = ReturnType<UseFormRegister<T>>
