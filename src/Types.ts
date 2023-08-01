// Classes
import * as races from './Races';
import * as archetypes from './Archetypes';

// Especial types
export type EspecialTypes = 'lifeRecovery' 
| 'instaKill'
| 'bonusAttack'
| 'bonusDefense';

export type RacesTypes = typeof races.Elf
| typeof races.Dwarf
| typeof races.Halfling
| typeof races.Orc;

export type ArchetypesTypes = typeof archetypes.Mage
| typeof archetypes.Necromancer
| typeof archetypes.Ranger
| typeof archetypes.Warrior;