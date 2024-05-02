import Character from '../Undead';

test('test class Undead', () => {
  const classes = new Character('player', 'Undead');
  const result = {
    name: 'player',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(classes).toMatchObject(result);
});