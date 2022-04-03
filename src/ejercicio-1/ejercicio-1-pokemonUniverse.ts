// eslint-disable-next-line quotes
import {fighter} from "./ejercicio-1-fighter";
/**
 * This class defines the pokemons objects.
 */
export class pokemonUniverse extends fighter {
  /**
     * This is the constructor of the class.
     * @param name Consists in the pokemon name.
     * @param weight Consists in the pokemon weight.
     * @param height Consists in the pokemon height.
     * @param attack Consists in the pokemon attack.
     * @param defense Consists in the pokemon defense.
     * @param speed Consists in the pokemon speed.
     * @param healthPoints Consists in the pokemon health points.
     * @param pokemonType Consists in the pokemon type.
     */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public pokemonType: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
