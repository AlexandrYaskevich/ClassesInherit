import Character from "./clases";

export default class Zombie extends Character {
    constructor (name, type) {
        this.attack =40;
        this.defence = 10;
    }
}