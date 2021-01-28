// https://jestjs.io/docs/ja/puppeteer

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.co.jp')
  })

  test('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })

  test('selector test1', async () => {
    const selector = '#hptl > a:nth-child(1)'
    const item = await page.$(selector)
    expect(item.getProperty('innerText')).toMatch('Googleについて')
  })

  test('selector test2', async () => {
    const selector = '#hptl > a:nth-child(1)'
    const data = await page.$eval(selector, item => {
      return item.innerText
    })
    expect(data).toMatch('Googleについて')
  })
})
