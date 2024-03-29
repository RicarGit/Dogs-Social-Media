interface BodyProps {
  username: string
  password: string
  email?: string
}

interface PhotosGet {
  page: number
  photosPerPage: number
  user: string
}

interface CommentProps {
  comment: string
}

interface PasswordLost {
  login: string
  url: string
}

interface PasswordReset extends Pick<PasswordLost, 'login'> {
  key: string
  password: string
}

const API_URL = 'https://dogsapi.origamid.dev/json'

export const api = {
  TOKEN_POST: (body: BodyProps) => {
    return {
      url: `${API_URL}/jwt-auth/v1/token`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }
  },
  TOKEN_VALIDATE_POST: (token: string) => {
    return {
      url: `${API_URL}/jwt-auth/v1/token/validate`,
      options: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    }
  },
  USER_GET: (token: string) => {
    return {
      url: `${API_URL}/api/user`,
      options: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    }
  },
  USER_POST: (body: BodyProps) => {
    return {
      url: `${API_URL}/api/user`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }
  },
  PHOTO_POST: (formData: FormData, token: string) => {
    return {
      url: `${API_URL}/api/photo`,
      options: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      }
    }
  },
  PHOTOS_GET: ({ page, photosPerPage, user }: PhotosGet) => {
    return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${photosPerPage}&_user=${user}`,
      options: {
        method: 'GET',
        Cache: 'no-storage'
      }
    }
  },
  PHOTO_GET: (id: number) => {
    return {
      url: `${API_URL}/api/photo/${id}`,
      options: {
        method: 'GET',
        Cache: 'no-storage'
      }
    }
  },
  COMMENT_POST: (id: number, body: CommentProps, token: string) => {
    return {
      url: `${API_URL}/api/comment/${id}`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      },
    }
  },
  PHOTO_DELETE: (id: number, token: string) => {
    return {
      url: `${API_URL}/api/photo/${id}`,
      options: {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
    }
  },
  PASSWORD_LOST: (body: PasswordLost) => {
    return {
      url: `${API_URL}/api/password/lost`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      },
    }
  },
  PASSWORD_RESET: (body: PasswordReset) => {
    return {
      url: `${API_URL}/api/password/reset`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      },
    }
  },
  STATS_GET: (token: string) => {
    return {
      url: `${API_URL}/api/stats`,
      options: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      },
    }
  }
}