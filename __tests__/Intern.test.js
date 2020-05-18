const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('create an intern object', () => {
  const intern = new Intern('John', 9987, 'john@mail.com', 'CAU');

  expect(intern.name).toBe('John');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test('Intern school is returned', () => {
  const intern = new Intern('John', 9987, 'john@mail.com', 'CAU');

  expect(intern.getSchool()).toBe('CAU');
});

test('Intern is the role returned', () => {
  const intern = new Intern('John', 9987, 'john@mail.com', 'CAU');

  expect(intern.getRole()).toBe('Intern');
});