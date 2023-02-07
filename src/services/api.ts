interface Login {
  username: string
  password: string
}

const API_URL = 'https://dogsapi.origamid.dev/json'

export const api = {
  TOKEN_POST: (body: Login) => {
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
  }
}