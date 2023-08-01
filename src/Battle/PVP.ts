// Classes
import Battle from './Battle';
import Character from '../Character';

// Interfaces
import Fighter from '../Fighter';

// Type
type BattleTypes = Character | Fighter;

export default class PVP extends Battle {
  // Attributes
  private _fighterOne: BattleTypes;
  private _fighterTwo: BattleTypes;

  constructor(fighterOne: BattleTypes, fighterTwo: BattleTypes) {
    super(fighterOne);
    this._fighterOne = fighterOne;
    this._fighterTwo = fighterTwo;
  }

  // Public methods
  public fight(): number {
    while ((this._fighterOne.lifePoints > 0) 
      && (this._fighterTwo.lifePoints > 0)) {
      this._fighterOne.attack(this._fighterTwo);
      this._fighterTwo.attack(this._fighterOne);
    }
    return super.fight();
  }
}