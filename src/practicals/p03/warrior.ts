import { Character } from "./character";

export class Warrior extends Character {
  weapon: string = ""

  constructor (name: string, weapon: string, health: number){
    this.name = name
    this.weapon = weapon
    this.health = health
  }

  getWeapon(){
    this.weapon = this.weapon
  }
  // TODO: implement class properties, constructor with super(...), and methods
}
