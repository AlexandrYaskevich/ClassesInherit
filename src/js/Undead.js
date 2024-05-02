import Character from "./clases";

export default class Undead extends Character {
    constructor (name, type) {
        this.attack = 25;
        this.defence = 25;
    }
}