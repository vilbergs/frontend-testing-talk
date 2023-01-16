import { test, expect, type Page } from '@playwright/test'

test.describe('Logging in', () => {
  test('should allow me to log in', async ({ page, context, browser }) => {
    await context.clearCookies()

    await page.goto('/login')

    await page.fill('input[type="email"]', 'vilberg@exam.net')
    await page.fill('input[type="password"]', 'password')

    await page.click('text=Log in')
  })
})
