import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  // Attributes
  private _strength: number;
  private _lifePoints: number;

  constructor(lifePoints = 85, strength = 63) {
    this._strength = strength;
    this._lifePoints = lifePoints;
  }

  // Getters
  public get strength() { return this._strength; }

  public get lifePoints() { return this._lifePoints; }

  // Public methods
  public attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints >= this._lifePoints) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= attackPoints;
    }
    return this.lifePoints;
  }
}