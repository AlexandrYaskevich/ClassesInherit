import Character from '../bowman';

test('test class Bowman', () => {
  const classes = new Character('player', 'Swordsman');
  const result = {
    name: 'player',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(classes).toMatchObject(result);
});