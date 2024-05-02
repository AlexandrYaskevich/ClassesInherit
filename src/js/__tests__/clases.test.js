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