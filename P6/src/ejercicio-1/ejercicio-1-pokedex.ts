/* eslint-disable quotes */
import {pokemonUniverse} from './ejercicio-1-pokemonUniverse';
import {starWarsUniverse} from './ejercicio-1-starWarsUniverse';
import {dragonBallUniverse} from './ejercicio-1-dragonBallUniverse';
/**
 * This class contents all the characters of the differents
 * universes.
 */
export class pokedex {
  /**
     * This is the constructor of the class.
     */
  constructor() {
  }
  /**
     * This function adds characters into the pokedex.
     * @param element This is the list of characters
     * to introduce into the pokedex.
     */
  addToPokedex(...element: any[]) {
    const pokemonArray: pokemonUniverse[] = [];
    const starWarsArray: starWarsUniverse[] = [];
    const dragonBallArray: dragonBallUniverse[] = [];
    // eslint-disable-next-line no-unused-vars
    let person: any;
    element.forEach((person) => {
      if ("pokemonType" in person) {
        pokemonArray.push(person);
      } else if ("catchingPhrase" in person) {
        starWarsArray.push(person);
      } else if ("level" in person) {
        dragonBallArray.push(person);
      }
    });
    const entry = require('prompt-sync')({sigit: true});
    let optionPrint: string = ``;
    console.log();
    optionPrint = entry(`Desea imprimir por pantalla la pokedex (S/N): `);
    if (optionPrint === `S`) {
      console.log(`La Pokedex de Pokemon es: `);
      console.log(pokemonArray);
      console.log();
      console.log(`La Pokedex de Star Wars es: `);
      console.log(starWarsArray);
      console.log();
      console.log(`La pokedex de Dragon Ball es:`);
      console.log(dragonBallArray);
      console.log();
    }
  }
}
