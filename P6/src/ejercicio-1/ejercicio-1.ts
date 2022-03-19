/* eslint-disable max-len */
interface character {
  name: string;
  weight: number;
  height: number;
  pokemonType?: string;
  attack: number;
  defense: number;
  speed: number;
  healthPoints: number;
  catchingPhrase: string;
}

abstract class fighter implements character {
  constructor(public readonly name: string, public weight: number,
    public height: number, public attack: number, public defense: number,
    public speed: number, public healthPoints: number,
    public catchingPhrase: string, public pokemonType?: string) {
  }
}

class pokemonUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, catchingPhrase: string, pokemonType: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints, catchingPhrase, pokemonType);
  }
}

class starWarsUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, catchingPhrase: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints, catchingPhrase);
  }
}

class dragonBallUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, catchingPhrase: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints, catchingPhrase);
  }
}

class pokedex { // MEJORAR ESTO PARA QUE PUEDA INTRODUCIR PERSONAJES DE MEJOR MANERA
  constructor(public pokemon?: pokemonUniverse, public heroe?: starWarsUniverse,
    public sayajin?: dragonBallUniverse) {
  }
  addToPokedex(pokemon?: pokemonUniverse, heroe?: starWarsUniverse,
      sayajin?: dragonBallUniverse) {
    let pokemonArray: pokemonUniverse[] = [];
    let starWarsArray: starWarsUniverse[] = [];
    let dragonBallArray: dragonBallUniverse[] = [];
    if (pokemon) {
      pokemonArray.push(pokemon);
    } else if (heroe) {
      starWarsArray.push(heroe);
    } else if (sayajin) {
      dragonBallArray.push(sayajin);
    }
  }
}

class combat {
  constructor() {
  }
  damageProduction(firstoponent: pokemonUniverse, secondoponent: pokemonUniverse) {
    let damage: number = 0;
    let efficiency: number = 0;
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
    damage = 50 * (firstoponent.attack / secondoponent.defense) * efficiency;
    return damage;
  }
  start(firstoponent: pokemonUniverse, secondoponent: pokemonUniverse) {
    let counter: number = 1;
    let combatFinish: number = -1;
    console.log();
    console.log(`<< LUCHA >>`);
    console.log(`Luchador 1: ${firstoponent.name}, tipo: ${firstoponent.name}, puntos de vida inicial: ${firstoponent.healthPoints}`);
    console.log(`Luchador 2: ${secondoponent.name}, tipo: ${secondoponent.pokemonType}, puntos de vida inicial: ${secondoponent.healthPoints}`);
    console.log();
    while (combatFinish != 0) {
      let totalDamage: number;
      totalDamage = this.damageProduction(firstoponent, secondoponent); // First attack of the turn
      secondoponent.healthPoints = secondoponent.healthPoints - totalDamage;
      console.log(`Durante el ataque número ${counter}, ${firstoponent.name} ha dejado a ${secondoponent.name} a ${secondoponent.healthPoints} puntos de vida`);
      counter++;
      if (secondoponent.healthPoints > 0) {
        totalDamage = this.damageProduction(secondoponent, firstoponent);
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
      }
    }
  }
}

const blastoisePokemon =
  new pokemonUniverse(`Blastoise`, 85.5, 1.6, 83, 100, 98, 79, `Blastoise`, `agua`);

const charizarPokemon =
  new pokemonUniverse(`Charizar`, 90.5, 1.7, 84, 74, 100, 78, `charizar`, `fuego`);

const battle = new combat();
battle.start(blastoisePokemon, charizarPokemon);

