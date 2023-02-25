import { useState } from "react"

interface Change {
  target: HTMLInputElement
}

interface Type {
  regex: RegExp
  errorMessage: string
}

type Types = Record<'email' | 'password' | 'username' | 'imgName' | 'weight' | 'age', Type>

const types: Types = {
  username: {
    regex: /^[a-zA-Z][a-zA-Z_]{2,19}$/,
    errorMessage: 'Nome inválido.'
  },
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    errorMessage: 'Preencha um email válido.'
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    errorMessage: 'A senha precisa ter pelo menos 8 caracteres, incluindo letras e números.'
  },
  weight: {
    regex: /0-9/,
    errorMessage: 'Preencha um peso válido.'
  },
  age: {
    regex: /d{0,3}/,
    errorMessage: 'Idade inválida.'
  },
  imgName: {
    regex: /^[a-zA-Z]{0,15}/,
    errorMessage: 'nome de imagem inválido.'
  }
}

export const useForm = (type: keyof Types) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const { regex, errorMessage } = types[type]

  const validate = (value: string) => {
    if (!type) return true

    if (value.length <= 0) {
      setError('Preencha um valor.')
      return false
    }

    if (!regex.test(value)) {
      setError(errorMessage)
      return false
    }

    setError(null)
    return true
  }

  const onChange = ({ target }: Change) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  const onBlur = () => validate(value)

  return {
    value,
    setValue,
    onChange,
    onBlur,
    error,
    validate: () => validate(value)
  }
}
