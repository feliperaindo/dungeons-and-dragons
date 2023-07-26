// Types
import { EnergyType } from '../Energy';

// Abstract Classes
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private readonly _energyType: EnergyType = 'stamina';

  private static newInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    
    Ranger.newInstancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this.newInstancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}