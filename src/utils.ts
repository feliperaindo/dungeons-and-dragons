import { EspecialTypes } from './Types';

export function getRandomInt(min = 1, max = 10) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export function randomEspecial(): EspecialTypes {
  const allEspecial: EspecialTypes[] = [
    'lifeRecovery',
    'instaKill',
    'bonusAttack',
    'bonusDefense',
  ];
  return allEspecial[getRandomInt(0, (allEspecial.length - 1))];
}
