import { test, expect, type Page } from '@playwright/test'
import { chromium } from '@playwright/test'

test.beforeEach(async ({ page }) => {})

test.describe('Logging in', () => {
  test('should allow me to add todo items', async ({ browser, page }) => {
    await page.goto('/login')

    await page.fill('input[type="email"]', 'vilberg@exam.net')
    await page.fill('input[type="password"]', 'password')

    await page.click('text=Log in')

    //----------------

    await page.getByPlaceholder('Add todo').fill('Buy milk')

    await page.getByText('Add').click()

    await page.pause()
  })
})
