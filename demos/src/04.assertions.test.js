// matchers
test('test obj', () => {
  const data = { name: 'Julián' };
  expect(data).toEqual({ name: 'Julián' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect('').toBeFalsy();
});

test('strings', () => {
  expect('Julián').toMatch(/uli/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
