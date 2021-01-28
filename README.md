```sh
$ yarn test
yarn run v1.22.5
$ jest
 FAIL  __tests__/index.js
  Google
    √ should be titled "Google" (5 ms)
    × selector test1 (6 ms)
    √ selector test2 (3 ms)

  ● Google › selector test1

    expect(received).toMatch(expected)

    Matcher error: received value must be a string

    Received has type:  object
    Received has value: {}

      13 |     const selector = '#hptl > a:nth-child(1)'
      14 |     const item = await page.$(selector)
    > 15 |     expect(item.getProperty('innerText')).toMatch('Googleについて')
         |                                           ^
      16 |   })
      17 | 
      18 |   test('selector test2', async () => {

      at Object.<anonymous> (__tests__/index.js:15:43)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        2.017 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
