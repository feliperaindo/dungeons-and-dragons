// Classes
import Battle from './Battle';
import Monster from '../Monster';
import Character from '../Character';

// Interfaces
import Fighter, { SimpleFighter } from '../Fighter';

// types
type Warrior = Character | Fighter;
type Opponents = Monster | Fighter | SimpleFighter;

export default class PVE extends Battle {
  private _player: Warrior;
  private _monsters: Opponents[];

  constructor(player: Warrior, monsters: Opponents[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  // Public methods
  public fight(): number {
    let index = 0;
  
    while (index < this._monsters.length) {
      this._player.attack(this._monsters[index]);
      this._monsters[index].attack(this._player);

      if (this._player.lifePoints <= 0) {
        return super.fight();    
      }

      if (this._monsters[index].lifePoints <= 0) {
        index += 1;
      }
    }
    return super.fight();
  }
}