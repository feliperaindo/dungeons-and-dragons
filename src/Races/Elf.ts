import Race from './Race';

export default class Elf extends Race {
  // Attributes
  public readonly maxLifePoints = 99;

  static newInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf.newInstancesCounter += 1;
  }

  // Methods
  static createdRacesInstances(): number { return this.newInstancesCounter; }
}