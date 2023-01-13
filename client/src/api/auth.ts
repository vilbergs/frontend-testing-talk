import api from '.'

export async function login(email: string, password: string) {
  const response = await api.post('/api/login', {
    email,
    password,
  })

  localStorage.setItem('token', JSON.stringify(response.data.token))

  return response.data.user
}

export async function logout() {
  return api.post('/api/logout')
}

export async function getCurrentUser() {
  const token = localStorage.getItem('token')

  if (!token) {
    return null
  }

  const response = await api.get('/api/user')

  localStorage.removeItem('token')

  return response.data
}
