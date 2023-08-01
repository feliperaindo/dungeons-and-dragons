// Interfaces
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';

// Abstract Classes
import Race, * as races from './Races';
import Archetype, * as archetypes from './Archetypes';

// Types
import * as types from './Types';

// utils
import { getRandomInt, randomEspecial } from './utils';

export default class Character implements Fighter {
  // Private attributes
  private readonly _energy: Energy;
  private readonly _randomEspecial: types.EspecialTypes;
  private _defense = getRandomInt();
  private _strength = getRandomInt();
  private _dexterity = getRandomInt();
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _bonusDefenseActive: boolean;
  private _bonusDefenseRounds: number;

  // Public Attributes
  public readonly race: Race;
  public readonly name: string;
  public readonly archetype: Archetype;

  constructor(
    name: string,
    ChosenRace: types.RacesTypes = races.Elf,
    ChosenArchetype: types.ArchetypesTypes = archetypes.Mage,
  ) {
    this.name = name;

    this.race = new ChosenRace(this.name, this.dexterity);
    this.archetype = new ChosenArchetype(this.name);

    this._maxLifePoints = this.initialLife();

    this._lifePoints = this.maxLifePoints;

    this._energy = {
      type_: this.archetype.energyType,
      amount: 1,
    };

    this._randomEspecial = randomEspecial();
    this._bonusDefenseActive = false;
    this._bonusDefenseRounds = 0;
  }

  // Private Methods
  private initialLife(): number {
    return (this.race.maxLifePoints / 2);
  }

  private incrementLife(): number {
    const lifeIncrement = (this.maxLifePoints + getRandomInt());

    if (lifeIncrement > this.race.maxLifePoints) {
      return this.race.maxLifePoints;
    } 
    return lifeIncrement;
  }

  private lifeRecovery(enemy: Fighter): void {
    this._lifePoints = this._maxLifePoints;
    enemy.receiveDamage(this.strength);
  }

  private instaKill(enemy: Fighter): void {
    enemy.receiveDamage(this.strength + 10000);
  }

  private bonusAttack(enemy: Fighter): void {
    enemy.receiveDamage((this.strength + 10));
  }

  private bonusDefense(enemy: Fighter): void {
    this._bonusDefenseActive = true;
    this._bonusDefenseRounds = 3;
    this._defense += 10;
    enemy.receiveDamage(this.strength);
  }

  private checkBonusDefense(): void {
    if (this._bonusDefenseActive) {
      this._bonusDefenseRounds -= 1;
      if (this._bonusDefenseRounds === 0) {
        this._defense -= 10;
        this._bonusDefenseActive = false;
      }
    }
  }

  // Getters
  public get energy(): Energy { return { ...this._energy }; }

  public get defense(): number { return this._defense; }

  public get strength(): number { return this._strength; }

  public get dexterity(): number { return this._dexterity; }

  public get lifePoints(): number { return this._lifePoints; }

  public get maxLifePoints(): number { return this._maxLifePoints; }

  // Public Methods
  public attack(enemy: Fighter | SimpleFighter): void {
    if (this.energy.amount < 10) {
      this._energy.amount += 1;
    }
    enemy.receiveDamage(this.strength);
  }

  public receiveDamage(attackPoints: number): number {
    const zero = 0;
    const deadLife = -1;
    const minDamage = 1;

    const damage = attackPoints - this.defense;

    this.checkBonusDefense();

    if (damage >= this.lifePoints) {
      this._lifePoints = deadLife;
      return this.lifePoints;
    }

    if (damage > zero) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= minDamage;
    }
    return this.lifePoints;
  }

  public special(enemy: Fighter): void {
    if (this.energy.amount < 10) {
      throw new Error('Insufficient energy to use especial move'); 
    }
    const Especial = {
      lifeRecovery: () => this.lifeRecovery(enemy),
      instaKill: () => this.instaKill(enemy),
      bonusAttack: () => this.bonusAttack(enemy),
      bonusDefense: () => this.bonusDefense(enemy),
    };
    Especial[this._randomEspecial]();
  }

  public levelUp(): void {
    this._energy.amount = 10;
    this._defense += getRandomInt();
    this._strength += getRandomInt();
    this._dexterity += getRandomInt();
    this._maxLifePoints = this.incrementLife();
    this._lifePoints = this.maxLifePoints;
  }
}