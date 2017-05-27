import randomFunction from '../src/index'

test('Test randomFunction', () => {
  expect(randomFunction()).toEqual([9, 25]);
});