const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
  const engineer = new Engineer('John', 9987, 'john@mail.com', 'Pops08');

  expect(engineer.name).toBe('John');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.gitHub).toEqual(expect.any(String));
});

test('Engineer Github is returned', () => {
  const engineer = new Engineer('John', 9987, 'john@mail.com', 'Pops08');

  expect(engineer.getGithub()).toBe('Pops08');
});

test('Engineer is the role returned', () => {
  const engineer = new Engineer('John', 9987, 'john@mail.com', 'Pops08');

  expect(engineer.getRole()).toBe('Engineer');
});