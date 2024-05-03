import { experiments } from "webpack";
import Character from "../clases";

test('test name < 2', () => {
    expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Ошибка'));
  });
  test('test name > 10', () => {
    expect(() => new Character('aaaaaaaaaaaaaaa', 'Bowman')).toThrowError(new Error('Ошибка'));
  });
  
  test('test no type', () => {
    expect(() => new Character('player', 'notype')).toThrowError(new Error('Ошибка'));
  });
  
  test('test name', () => {
    const character = new Character('player', 'Magician');
    expect(character.name).toBe('player');
  });
  
  test('test type', () => {
    const character = new Character('player', 'Magician');
    expect(character.type).toBe('Magician');
  });
  test('test health and other', () => {
    const character = new Character('player', 'Magician');
    const result = {
      name: 'player',
      type: 'Magician',
      health: 100,
      level: 1,
    };
    expect(character).toMatchObject(result);
  });

  test('test damage', () => {
    const character = new Character('player', 'Magician');
    character.defence = 40;
    character.damage(50);
    expect(character.health).toBe(70);
  });

  test('test levelUp', () => {
    const character = new Character('player', 'Magician');
    character.attack = 10;
    character.defence = 40;
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12);
    expect(character.defence).toBe(48);
    expect(character.health).toBe(100);
  });
  test('test levelUp if dead', () => {
    const character = new Character('player', 'Magician');
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('нельзя повысить левел умершего');
  })