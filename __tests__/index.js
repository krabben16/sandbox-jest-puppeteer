/**
 * Using with puppeteer
 * https://jestjs.io/docs/ja/puppeteer
 */
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.co.jp')
  })

  test('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })
})
