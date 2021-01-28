// https://jestjs.io/docs/ja/puppeteer

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  test('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })
})
