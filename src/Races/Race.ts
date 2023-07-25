export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  protected abstract get maxLifePoints(): number;
}