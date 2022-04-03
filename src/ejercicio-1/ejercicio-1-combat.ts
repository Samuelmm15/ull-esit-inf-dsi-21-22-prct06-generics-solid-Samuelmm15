/* eslint-disable quotes */
/* eslint-disable max-len */
/**
 * This class makes a real battle with differents
 * characters of the differents universes.
 */
export class combat {
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
