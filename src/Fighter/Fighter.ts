// Interfaces
import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // attributes
  energy?: Energy;

  defense: number;

  // Methods
  levelUp() : void;

  special?(enemy: Fighter) : void;
}