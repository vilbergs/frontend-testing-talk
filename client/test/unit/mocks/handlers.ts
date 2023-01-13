// src/mocks/handlers.js
import { rest } from 'msw'

const user = {
  id: 2,
  name: 'Test Persson',
  email: 'test@example.com',
  email_verified_at: '2023-01-12T18:57:57.000000Z',
  created_at: '2023-01-12T18:57:57.000000Z',
  updated_at: '2023-01-12T18:57:57.000000Z',
  two_factor_secret: null,
  two_factor_recovery_codes: null,
}

export const handlers = [
  // Handles a POST /login request
  rest.post(/\/login/, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    )
  }),

  // Handles a GET /user request
  rest.get(/\/user/, (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      )
    }
    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json(user))
  }),

  rest.get('/api/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Todo',
          user_id: user.id,
          is_complete: false,
        },
        {
          id: 2,
          title: 'Get catfood',
          user_id: user.id,
          is_complete: false,
        },
      ])
    )
  }),
  rest.post(/\/api\/todos/, async (req, res, ctx) => {
    const body = await req.json()

    return res(
      ctx.status(201),
      ctx.json({
        id: 3,
        title: body.title,
        user_id: user.id,
        is_complete: false,
      })
    )
  }),

  rest.patch(/\/api\/todos\/\:todo/, async (req, res, ctx) => {
    const body = await req.json()

    return res(
      ctx.status(200),
      ctx.json({
        id: 3,
        user_id: user.id,
        title: body.title,
        is_complete: body.is_complete,
      })
    )
  }),
]
