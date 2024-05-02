export default class Character {
    constructor (name, type, health, level, attack, defence) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Ошибка');
        }
        else {
            this.name = name;       
        }
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (types.indexOf(type) === -1) {
          throw new Error('Ошибка');
        } else {
          this.type = type;
        }

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
        
    }
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
}

