// Classes
import Dragon from './Dragon';
import Monster from './Monster';
import * as Races from './Races';
import Character from './Character';
import * as Archetypes from './Archetypes';
import Battle, { PVE, PVP } from './Battle';

// Characters
export const player1 = new Character('Player One');
export const player2 = new Character(
  'Player Two',
  Races.Halfling,
  Archetypes.Necromancer,
);
export const player3 = new Character(
  'Player Three',
  Races.Dwarf,
  Archetypes.Warrior,
);
export const monster1 = new Monster();
export const monster2 = new Dragon();

// Combats
export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

// Actions
for (let index = 0; index < 5; index += 1) { player1.levelUp(); }

export function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => { battle.fight(); });
}
