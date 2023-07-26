import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private readonly _cost: number;
  private readonly _special: number;

  constructor(name: string) {
    this._name = name;
    this._cost = 0;
    this._special = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get cost(): number {
    return this._cost;
  }

  public get special(): number {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}