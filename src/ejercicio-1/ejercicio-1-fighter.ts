// eslint-disable-next-line quotes
import {character} from './ejercicio-1-character';
/**
 * This is the base class of the differents universes.
 */
export abstract class fighter implements character {
  /**
     * This is the constructor of the base class.
     * @param name Consists in the name of the character.
     * @param weight Consists in the wight of the character.
     * @param height Consists in the height of the character.
     * @param attack Consists in the attack of the character.
     * @param defense Consists in the defense of the character.
     * @param speed Consistis in the speed of the character.
     * @param healthPoints Consists in the health points of the character.
     */
  constructor(public readonly name: string, public weight: number,
      public height: number, public attack: number, public defense: number,
      public speed: number, public healthPoints: number) {
  }
}
