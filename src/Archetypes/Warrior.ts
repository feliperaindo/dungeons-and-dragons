// Types
import { EnergyType } from '../Energy';

// Abstract Classes
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  // Attributes
  public readonly energyType: EnergyType = 'stamina';

  private static newInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    
    Warrior.newInstancesCounter += 1;
  }

  // Methods
  static createdArchetypeInstances(): number {
    return this.newInstancesCounter;
  }
}