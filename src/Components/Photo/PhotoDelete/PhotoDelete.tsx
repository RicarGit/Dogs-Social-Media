import * as S from './PhotoDelete.styled'
import { getStorageToken } from 'helpers/getStoregeToken'
import { useFetch } from 'hooks/useFetch'
import { api } from 'services/api'

interface UserId {
  userId: string
}

export const PhotoDelete = ({ userId }: UserId) => {
  const { loading, request } = useFetch()

  const handleClick = async () => {
    const token = getStorageToken()
    const confirmDelection = window.confirm('Tem certeza que deseja deletar?')

    if (!token) {
      throw new Error("Token Inválido.")
    }

    if (confirmDelection) {
      const { url, options } = api.PHOTO_DELETE(userId, token)
      const { response } = await request(url, options)

      if (response?.ok) window.location.reload()
    }
  }

  return (
    <S.PhotoDelete disabled={loading} onClick={handleClick}>
      {loading ? 'Deletando...' : 'Deletar'}
    </S.PhotoDelete>
  )
}
