import Button from '@/components/Button.vue'
import { render } from '@testing-library/vue'
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const { container } = render(Button)

  expect(container).toMatchSnapshot()
})
