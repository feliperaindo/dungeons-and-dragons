// Classes
import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  // Attributes
  private _fighterOne: Character;
  private _fighterTwo: Character;

  constructor(fighterOne: Character, fighterTwo: Character) {
    super(fighterOne);
    this._fighterOne = fighterOne;
    this._fighterTwo = fighterTwo;
  }

  // Methods
  // fight(): number {
    
  // }
}