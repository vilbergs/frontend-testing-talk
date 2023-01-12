import api from '.'

export async function login(email: string, password: string) {
  await api.get('/sanctum/csrf-cookie')

  await api.post('/login', {
    email,
    password,
  })

  const response = await api.get('/api/user')

  return response.data
}

export async function logout() {
  return api.post('/logout')
}

export async function getCurrentUser() {
  const response = await api.get('/api/user')

  return response.data
}
