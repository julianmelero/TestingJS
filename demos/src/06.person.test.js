const Person = require('./06.person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Julián', 55, 1.78);
  });

  test('should return down', () => {
    person.weight = 55;
    person.height = 1.78;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 70;
    person.height = 1.78;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
