// Types
import { EnergyType } from '../Energy';

// Abstract Classes
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private readonly _energyType: EnergyType = 'mana';

  private static newInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    
    Necromancer.newInstancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this.newInstancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}