import api from '.'

export async function getTodos(userId: number) {
  const response = await api.get(`/api/users/${userId}/todos`)

  return response.data
}
