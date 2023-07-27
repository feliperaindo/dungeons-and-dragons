export default interface SimpleFighter {
  // Attributes
  strength: number;
  
  lifePoints: number;

  // Methods
  attack(enemy: SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}