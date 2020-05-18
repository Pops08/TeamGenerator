const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create a manager object', () => {
  const manager = new Manager('John', 9987, 'john@mail.com', 908);

  expect(manager.name).toBe('John');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('manager is the role returned', () => {
  const manager = new Manager('John', 9987, 'john@mail.com', 908);

  expect(manager.getRole()).toBe('Manager');
});