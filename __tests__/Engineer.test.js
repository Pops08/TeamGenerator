const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

console.log(new Potion());

test('creates a player object', () => {
  const player1 = new Player('Dave');

  expect(player1.name).toBe('Dave');
  expect(player1.health).toEqual(expect.any(Number));
  expect(player1.strength).toEqual(expect.any(Number));
  expect(player1.agility).toEqual(expect.any(Number));
  expect(player1.inventory).toEqual(
  expect.arrayContaining([expect.any(Object)])
  );

  console.log(player1);
})

test("gets player's stats as an object", () => {
  const player2 = new Player('Joe');

  expect(player2.getStats()).toHaveProperty('potions');
  expect(player2.getStats()).toHaveProperty('health');
  expect(player2.getStats()).toHaveProperty('strength');
  expect(player2.getStats()).toHaveProperty('agility');

  console.log(player2);

});

test('gets inventory from player or returns false', () => {
  const player3 = new Player('John');

  expect(player3.getInventory()).toEqual(expect.any(Array));

  player3.inventory = [];

  expect(player3.getInventory()).toEqual(false);

  console.log(player3);
});

test("gets player's health value", () => {
  const player4 = new Player('Dan');

  expect(player4.getHealth()).toEqual(expect.stringContaining(player4.health.toString()));

  console.log(player4);

});

test('checks if player is alive or not', () => {
  const player5 = new Player('Dave');

  expect(player5.isAlive()).toBeTruthy();

  player5.health = 0;

  expect(player5.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
  const player6 = new Player('Dave');
  const oldHealth = player6.health;

  player6.reduceHealth(5);

  expect(player6.health).toBe(oldHealth - 5);

  player6.reduceHealth(99999);

  expect(player6.health).toBe(0);
});

test("gets player's attack value", () => {
  const player7 = new Player('Dave');
  player7.strength = 10;

  expect(player7.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player7.getAttackValue()).toBeLessThanOrEqual(15);
});

test('adds a potion to the inventory', () => {
  const player8 = new Player('Dave');
  const oldCount = player8.inventory.length;

  console.log(player8);

  player8.addPotion(new Potion());

  console.log(player8);

  expect(player8.inventory.length).toBeGreaterThan(oldCount);
});

test('uses a potion from inventory', () => {
  const player = new Player('Dave');
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);

  expect(player.inventory.length).toBeLessThan(oldCount);
});
