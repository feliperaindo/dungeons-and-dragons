import { EnergyType } from '../Energy';

export default abstract class Archetype {
  // Attributes
  public readonly name: string;
  public readonly cost: number;
  public readonly special: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 0;
    this.special = 0;
  }

  // Methods
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}