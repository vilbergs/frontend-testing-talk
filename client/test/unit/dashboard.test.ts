import Dashboard from '@/views/Dashboard.vue'
import { render, fireEvent } from './utils'
import { test, expect } from 'vitest'

test.only('Creating a todo', async () => {
  const {
    getByText,
    getByLabelText,
    getByPlaceholderText,
    getByRole,
    debug,
    findByText,
  } = render(Dashboard)

  const input = getByPlaceholderText(/add todo/i)

  await fireEvent.update(input, 'Get catfood')

  const button = getByRole('button', { name: /add/i })

  await fireEvent.click(button)

  expect(await findByText('Get catfood')).toBeInTheDocument()
})
