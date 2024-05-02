import Character from '../zombie';

test('test class Zombie', () => {
  const classes = new Character('player', 'Zombie');
  const result = {
    name: 'player',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(classes).toMatchObject(result);
});