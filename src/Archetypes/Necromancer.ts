// Types
import { EnergyType } from '../Energy';

// Abstract Classes
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  // Attributes
  public readonly energyType: EnergyType = 'mana';

  private static newInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    
    Necromancer.newInstancesCounter += 1;
  }

  // Methods
  static createdArchetypeInstances(): number {
    return this.newInstancesCounter;
  }
}