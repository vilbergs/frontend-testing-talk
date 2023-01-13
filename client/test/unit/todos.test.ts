import Todos from '@/components/Todos.vue'
import { render } from '@testing-library/vue'
import { test, expect } from 'vitest'

test('renders todo', () => {
  const { getByText } = render(Todos, {
    props: {
      items: [
        {
          id: 1,
          title: 'Todo',
          is_complete: false,
        },
      ],
    },
  })

  expect(getByText('Todo')).toBeInTheDocument()
})

test('renders completed todo', () => {
  const { getByLabelText } = render(Todos, {
    props: {
      items: [
        {
          id: 1,
          title: 'Todo',
          is_complete: true,
        },
      ],
    },
  })

  expect(getByLabelText('Todo')).toBeChecked()
})

// Discussion: should we add a test for the "add" button here?
