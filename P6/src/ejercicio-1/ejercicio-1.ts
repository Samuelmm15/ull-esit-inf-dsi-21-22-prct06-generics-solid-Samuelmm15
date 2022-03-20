/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable quotes */
/* eslint-disable max-len */
/**
 * This interface defines the structure of the characters
 * of the differents universes.
 */
interface character {
  name: string;
  weight: number;
  height: number;
  attack: number;
  defense: number;
  speed: number;
  healthPoints: number;
}

/**
 * This is the base class of the differents universes.
 */
abstract class fighter implements character {
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

/**
 * This class defines the pokemons objects.
 */
class pokemonUniverse extends fighter {
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

/**
 * This class defines the Star Wars characters objects.
 */
class starWarsUniverse extends fighter {
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

/**
 * This class defines the Dragon Ball characters objects.
 */
class dragonBallUniverse extends fighter {
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

/**
 * This class contents all the characters of the differents
 * universes.
 */
class pokedex {
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

/**
 * This class makes a real battle with differents
 * characters of the differents universes.
 */
class combat {
  /**
   * This is the constructor of the class.
   */
  constructor() {
  }
  /**
   * This function calculates the damage produced in an
   * attack of one character against other.
   * @param firstoponent Consists in the first character to attack.
   * @param secondoponent Consists in the second character that
   * receives damage.
   * @param type1 Consists in the type of universe of the firstoponent.
   * @param type2 Consists in the type of universe of the secondoponent.
   * @returns The damage produced by the firstoponent to the secondoponent.
   * Differents types of universes:
   * ```
   * type = 1; // Pokemon Universe
   * type = 2; // Star Wars Universe
   * type = 3; // Dragon Ball Universe
   * ```
   */
  damageProduction(firstoponent: any, secondoponent: any, type1: number, type2: number): number {
    let damage: number = 0;
    let efficiency: number = 1; // by default
    if ((type1 === 1) && (type2 === 1)) {
      if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `hierba`)) {
        efficiency = 2;
      } else if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `agua`)) {
        efficiency = 0.5;
      } else if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `eléctrico`)) {
        efficiency = 1;
      } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `hierba`)) {
        efficiency = 0.5;
      } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `eléctrico`)) {
        efficiency = 0.5;
      } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `eléctrico`)) {
        efficiency = 1;
      } else if (firstoponent.pokemonType === secondoponent.pokemonType) {
        efficiency = 0.5;
      } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `fuego`)) {
        efficiency = 0.5;
      } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `fuego`)) {
        efficiency = 2;
      } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `fuego`)) {
        efficiency = 1;
      } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `agua`)) {
        efficiency = 2;
      } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `agua`)) {
        efficiency = 2;
      } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `hierba`)) {
        efficiency = 1;
      }
    }
    if (((type1 === 2) && (type2 === 2)) || ((type1 === 3) && (type2 === 3))) {
      if (firstoponent.attack > secondoponent.defense) {
        efficiency = 2.5;
      } else if (firstoponent.attack < secondoponent.defense) {
        efficiency = 0.5;
      } else if (firstoponent.attack === secondoponent.defense) {
        efficiency = 1;
      }
    }
    damage = 50 * (firstoponent.attack / secondoponent.defense) * efficiency;
    return damage;
  }
  /**
   * This function makes a combat in real time.
   * @param firstoponent Consists in the first oponent of the combat.
   * @param secondoponent Consists in the second oponent of the combat.
   */
  start(firstoponent: any, secondoponent: any) {
    let counter: number = 1;
    let combatFinish: number = -1;
    let type1: number = 0;
    let type2: number = 0;
    console.log();
    console.log(`<< LUCHA >>`);
    if ("pokemonType" in firstoponent) {
      type1 = 1;
      console.log(`Luchador 1: ${firstoponent.name}, tipo: ${firstoponent.pokemonType}, puntos de vida inicial: ${firstoponent.healthPoints}`);
    } else if ("catchingPhrase" in firstoponent) {
      type1 = 2;
      console.log(`Luchador 1: ${firstoponent.name}, puntos de vida inicial: ${firstoponent.healthPoints}, frase: ${firstoponent.catchingPhrase}`);
    } else if ("level" in firstoponent) {
      type1 = 3;
      console.log(`Luchador 1: ${firstoponent.name}, puntos de vida inicial: ${firstoponent.healthPoints}, Nivel: ${firstoponent.level}`);
    }
    if ("pokemonType" in secondoponent) {
      type2 = 1;
      console.log(`Luchador 2: ${secondoponent.name}, tipo: ${secondoponent.pokemonType}, puntos de vida inicial: ${secondoponent.healthPoints}`);
    }
    if ("catchingPhrase" in secondoponent) {
      type2 = 2;
      console.log(`Luchador 2: ${secondoponent.name}, puntos de vida inicial: ${secondoponent.healthPoints}, frase: ${secondoponent.catchingPhrase}`);
    }
    if ("level" in firstoponent) {
      type2 = 3;
      console.log(`Luchador 2: ${secondoponent.name}, puntos de vida inicial: ${secondoponent.healthPoints}, Nivel: ${secondoponent.level}`);
    }
    console.log();
    while (combatFinish != 0) {
      let totalDamage: number;
      totalDamage = this.damageProduction(firstoponent, secondoponent, type1, type2); // First attack of the turn
      secondoponent.healthPoints = secondoponent.healthPoints - totalDamage;
      console.log(`Durante el ataque número ${counter}, ${firstoponent.name} ha dejado a ${secondoponent.name} a ${secondoponent.healthPoints} puntos de vida`);
      counter++;
      if (secondoponent.healthPoints > 0) {
        totalDamage = this.damageProduction(secondoponent, firstoponent, type1, type2);
        firstoponent.healthPoints = firstoponent.healthPoints - totalDamage;
        console.log();
        console.log(`Durante el ataque número ${counter}, ${secondoponent.name} ha dejado a ${firstoponent.name} a ${firstoponent.healthPoints} puntos de vida`);
        counter++;
      }
      if (firstoponent.healthPoints > 0) {
        if (secondoponent.healthPoints <= 0) {
          combatFinish = 0;
          console.log();
          console.log(`<< LA LUCHA HA FINALIZADO >>`);
          console.log(`El ganador de esta batalla, ha sido ${firstoponent.name}`);
          console.log(`Su peso es: ${firstoponent.weight}`);
          console.log(`Su altura es: ${firstoponent.height}`);
          console.log(`Su velocidad es: ${firstoponent.speed}`);
          if ("catchingPhrase" in firstoponent) {
            console.log(`Frase: ${firstoponent.catchingPhrase}`);
          } else if ("level" in firstoponent) {
            console.log(`Nivel: ${firstoponent.level}`);
          }
        } else {
          console.log();
          console.log(`<< CONTINÚA LA LUCHA >>`);
          console.log();
        }
      } else {
        combatFinish = 0;
        console.log();
        console.log(`<< LA LUCHA HA FINALIZADO >>`);
        console.log(`El ganador de esta batalla, ha sido ${secondoponent.name}`);
        console.log(`Su peso es: ${secondoponent.weight}`);
        console.log(`Su altura es: ${secondoponent.height}`);
        console.log(`Su velocidad es: ${secondoponent.speed}`);
        if ("catchingPhrase" in secondoponent) {
          console.log(`Frase: ${secondoponent.catchingPhrase}`);
        } else if ("level" in secondoponent) {
          console.log(`Nivel: ${secondoponent.level}`);
        }
      }
    }
  }
}

export const blastoisePokemon =
  new pokemonUniverse(`Blastoise`, 85.5, 1.6, 83, 100, 98, 79, `agua`);

export const charizarPokemon =
  new pokemonUniverse(`Charizar`, 90.5, 1.7, 84, 74, 100, 78, `fuego`);

export const obiWanKenobi =
  new starWarsUniverse(`Obi Wan Kenobi`, 80, 1.82, 130, 100, 100, 300, `Que la fuerza te acompañe`);

export const dooku =
  new starWarsUniverse(`Conde Dooku`, 80, 1.96, 120, 150, 80, 200, `Pásate al lado oscuro`);

export const goku =
  new dragonBallUniverse(`Son Goku`, 62, 1.75, 150, 200, 120, 100, 3);

export const vegeta =
  new dragonBallUniverse(`Vegeta`, 56, 1.64, 150, 150, 110, 100, 3);

export const battle = new combat();
battle.start(obiWanKenobi, goku);

const pokedexAdd = new pokedex();
pokedexAdd.addToPokedex(blastoisePokemon, charizarPokemon, obiWanKenobi, dooku, goku, vegeta);

