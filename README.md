```sh
$ yarn test
yarn run v1.22.5
$ jest
 PASS  __tests__/index.js
 FAIL  __tests__/selector.ts
  ● Selector › NG

    expect(received).toMatch(expected)

    Matcher error: received value must be a string

    Received has type:  object
    Received has value: {"_client": {"_callbacks": [Map], "_connection": [Connection], "_sessionId": "60E2C91E42132B01D2E5F0365501583D", "_targetType": "page", "emitter": [Object], "eventsMap": [Map]}, "_context": {"_client": [CDPSession], "_contextId": 3, "_world": [DOMWorld]}, "_disposed": false, "_remoteObject": {"type": "string", "value": "Googleについて"}}

       8 |     const item = await page.$(selector)
       9 |     const property = await item?.getProperty('textContent')
    > 10 |     expect(property).toMatch('Googleについて')
         |                      ^
      11 |   })
      12 | 
      13 |   test('OK', async () => {

      at __tests__/selector.ts:10:22
      at step (__tests__/selector.ts:33:23)
      at Object.next (__tests__/selector.ts:14:53)
      at fulfilled (__tests__/selector.ts:5:58)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        5.167 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
