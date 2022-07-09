/*

beforeAll(): antes de todas las pruebas.
beforeEach(): antes de cada prueba.
afterEach(): después de cada prueba.
afterAll(): después de todas las pruebas

*/

describe('Set', () => {
  beforeAll(() => {
    console.log('Before All');
    // up db
  });

  beforeEach(() => {
    console.log('Before Each Set');
  });

  test('case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('Case 2');
    expect(1 + 1).toBe(2);
  });
});

describe('other group', () => {
  test('case 3', () => {
    console.log('Case 3');
    expect(1 + 1).toBe(2);
  });

  test('case 4', () => {
    console.log('Case 4');
    expect(1 + 1).toBe(2);
  });
});
