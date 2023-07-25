import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc.newInstancesCounter += 1;
  }

  static createdRacesInstances(): number {
    return this.newInstancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}