// eslint-disable-next-line quotes
import {fighter} from './ejercicio-1-fighter';
/**
 * This class defines the Star Wars characters objects.
 */
export class starWarsUniverse extends fighter {
  /**
     * This is the constructor of the class.
     * @param name Consists in the name of the heroe.
     * @param weight Consists in the weight of the heroe.
     * @param height Consists in the height of the heroe.
     * @param attack Consists in the attack of the heroe.
     * @param defense Consists in the defense of the heroe.
     * @param speed Consists in the speed of the heroe.
     * @param healthPoints Consists in the health points of the heroe.
     * @param catchingPhrase Consists in the catching phrase of the heroe.
     */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public catchingPhrase: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
