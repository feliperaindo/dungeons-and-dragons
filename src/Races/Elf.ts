import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;

    Elf.newInstancesCounter += 1;
  }

  static createdRacesInstances(): number {
    return this.newInstancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}