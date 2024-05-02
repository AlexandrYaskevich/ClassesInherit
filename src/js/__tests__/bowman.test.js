import Character from '../bowman';

test('test class Bowman', () => {
  const classes = new Character('player', 'Bowman');
  const result = {
    name: 'player',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(classes).toMatchObject(result);
});