import Race from './Race';

export default class Halfling extends Race {
  // Attributes
  public readonly maxLifePoints = 60;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling.newInstancesCounter += 1;
  }

  // Methods
  static createdRacesInstances(): number { return this.newInstancesCounter; }
}