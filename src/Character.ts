// Interfaces
import Energy from './Energy';
import Fighter from './Fighter';

// Abstract Classes
import Race, * as races from './Races';
import Archetype, * as archetypes from './Archetypes';

// utils
import getRandomInt from './utils';

export default class Character implements Fighter {
  private readonly _race: Race;
  private readonly _energy: Energy;
  private readonly _archetype: Archetype;
  
  private readonly _name: string;

  private _defense: number;
  private _strength: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _maxLifePoints: number;

  constructor(name: string) {
    this._name = name;

    this._defense = getRandomInt();
    this._strength = getRandomInt();
    this._dexterity = getRandomInt();

    this._race = Character.applyRace(this._name, this._dexterity);
    this._archetype = Character.applyArchetype(this._name);

    this._maxLifePoints = Character.initialLife(this._race.maxLifePoints);

    this._lifePoints = this._maxLifePoints;

    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public get name(): string {
    return this._name;
  }

  public get defense(): number {
    return this._defense;
  }

  public get strength(): number {
    return this._strength;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static initialLife(maxLifePoints: number): number {
    return (maxLifePoints / 2);
  }

  static incrementLife(character: Race, actualLife: number): number {
    const lifeIncrement = (actualLife + getRandomInt());

    if (lifeIncrement > character.maxLifePoints) {
      return character.maxLifePoints;
    } 
    return lifeIncrement;
  }

  static applyRace(
    name: string,
    dexterity: number,
    ChosenRace = races.Elf,
  ): Race {
    return new ChosenRace(name, dexterity);
  }

  static applyArchetype(name: string, ChosenArchetype = archetypes.Mage) {
    return new ChosenArchetype(name);
  }

  public receiveDamage(attackPoints: number): number {
    const zero = 0;
    const minDamage = 1;
    const deadLife = -1;
    const damage = attackPoints - this._defense;

    if (damage >= this._lifePoints) {
      this._lifePoints = deadLife;
      return this._lifePoints;
    }

    if (damage > zero) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= minDamage;
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._energy.amount = 10;
    this._defense += getRandomInt();
    this._strength += getRandomInt();
    this._dexterity += getRandomInt();
    this._maxLifePoints = Character
      .incrementLife(this._race, this._maxLifePoints);
    this._lifePoints = this._maxLifePoints;
  }
}