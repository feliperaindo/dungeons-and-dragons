// Interfaces
import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  energy?: Energy;
  defense: number;

  levelUp() : void;

  special?(enemy: Fighter) : void;
}