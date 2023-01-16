import Button from '@/components/Button.vue'
import { render } from '@testing-library/vue'
import { expect, it } from 'vitest'

it('Snapshot', () => {
  const { container } = render(Button)

  expect(container).toMatchSnapshot()
})
