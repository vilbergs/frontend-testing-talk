// global-setup.ts
import { chromium, FullConfig } from '@playwright/test'

async function globalSetup() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:5173/login')

  await page.fill('input[type="email"]', 'vilberg@exam.net')
  await page.fill('input[type="password"]', 'password')

  await page.click('text=Log in')

  await page.context().storageState({ path: 'storageState.json' })
  await browser.close()
}

export default globalSetup
