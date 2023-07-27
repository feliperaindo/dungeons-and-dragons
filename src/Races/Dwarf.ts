import Race from './Race';

export default class Dwarf extends Race {
  // Attributes
  public readonly maxLifePoints = 80;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf.newInstancesCounter += 1;
  }

  // Methods
  static createdRacesInstances(): number { return this.newInstancesCounter; }
}