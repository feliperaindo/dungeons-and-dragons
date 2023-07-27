import Race from './Race';

export default class Orc extends Race {
  // Attributes
  public readonly maxLifePoints = 74;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc.newInstancesCounter += 1;
  }

  // Methods
  static createdRacesInstances(): number { return this.newInstancesCounter; }
}