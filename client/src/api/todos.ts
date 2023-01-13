import api from '.'

export async function getTodos() {
  const response = await api.get(`/api/todos`)

  return response.data
}

export async function createTodo(data: Record<string, any>) {
  const response = await api.post(`/api/todos`, data)

  return response.data
}

export async function updateTodo(todoId: number, data: Record<string, any>) {
  const response = await api.patch(`/api/todos/${todoId}`, data)

  return response.data
}
