import { render, RenderOptions } from '@testing-library/vue'
import { vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

export * from '@testing-library/vue'

const renderWithStore = (component, options?: RenderOptions) => {
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
  })

  return render(component, {
    ...options,
    global: {
      plugins: [pinia],
    },
  })
}

export { renderWithStore as render }
