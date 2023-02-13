interface UserInfo {
  username: string
  password: string
  email?: string
}

const API_URL = 'https://dogsapi.origamid.dev/json'

export const api = {
  TOKEN_POST: (body: UserInfo) => {
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
  USER_POST: (body: UserInfo) => {
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
  }
}