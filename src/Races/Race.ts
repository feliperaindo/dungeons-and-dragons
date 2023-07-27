export default abstract class Race {
  // Attributes
  public readonly name: string;
  public readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  // Methods
  static createdRacesInstances(): number { throw new Error('Not implemented'); }

  public abstract get maxLifePoints(): number;
}