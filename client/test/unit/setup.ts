import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/vue'
import { expect, afterEach, beforeAll, afterAll } from 'vitest'
import { server } from './mocks/server'

expect.extend(matchers)

beforeAll(() => server.listen())
afterEach(() => {
  // Clear the DOM after each test
  cleanup()

  // Reset any request handlers that we may add during the tests,
  server.restoreHandlers()
})
afterAll(() => server.close())
