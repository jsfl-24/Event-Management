jest.config.js:
{
  "testEnvironment": "node",
  "collectCoverage": true,
  "coverageDirectory": "coverage"
}

src/app/hello.test.ts:
test('hello world!', () => {
  expect(1 + 1).toBe(2);
});