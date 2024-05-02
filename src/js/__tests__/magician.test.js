import Character from '../Magician';

test('test class Magician', () => {
  const classes = new Character('player', 'Magician');
  const result = {
    name: 'player',
    type: 'Magacian',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(classes).toMatchObject(result);
});