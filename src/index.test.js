import hello from './index'

test('hello', () => {
  expect(hello('Hello ES6')).toBe('Hello ES6')
})
