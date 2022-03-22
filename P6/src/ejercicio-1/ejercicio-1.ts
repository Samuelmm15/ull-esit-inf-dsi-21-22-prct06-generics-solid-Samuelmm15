/* eslint-disable max-len */
/* eslint-disable new-cap */
import {pokemonUniverse} from './ejercicio-1-pokemonUniverse';
import {starWarsUniverse} from './ejercicio-1-starWarsUniverse';
import {dragonBallUniverse} from './ejercicio-1-dragonBallUniverse';
import {combat} from './ejercicio-1-combat';
import {pokedex} from './ejercicio-1-pokedex';

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

