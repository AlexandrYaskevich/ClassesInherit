import Character from '../Daemon';

test('test class Daemon', () => {
  const classes = new Character('player', 'Daemon');
  const result = {
    name: 'player',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(classes).toMatchObject(result);
});