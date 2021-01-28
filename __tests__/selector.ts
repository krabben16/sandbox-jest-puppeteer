describe('Selector', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.co.jp')
  })

  test('NG', async () => {
    const selector = '#hptl > a:nth-child(1)'
    const item = await page.$(selector)
    const property = await item?.getProperty('textContent')
    expect(property).toMatch('Googleについて')
  })

  test('OK', async () => {
    const selector = '#hptl > a:nth-child(1)'
    const data = await page.$eval(selector, item => {
      return item.textContent
    })
    expect(data).toMatch('Googleについて')
  })
})
