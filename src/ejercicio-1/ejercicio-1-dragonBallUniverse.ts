// eslint-disable-next-line quotes
import {fighter} from './ejercicio-1-fighter';
/**
 * This class defines the Dragon Ball characters objects.
 */
export class dragonBallUniverse extends fighter {
  /**
     * This is the constructor of the class.
     * @param name Consists in the name of the sayajin.
     * @param weight Consists in the waight of the sayajin.
     * @param height Consists in the height of the sayajin.
     * @param attack Consists in the attack of the sayajin.
     * @param defense Consists in the defense of the sayajin.
     * @param speed Consists in the speed of the sayajin.
     * @param healthPoints Consists in the health points of the sayajin.
     * @param level Consists in the level of the sayajin.
     */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public level: number) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
