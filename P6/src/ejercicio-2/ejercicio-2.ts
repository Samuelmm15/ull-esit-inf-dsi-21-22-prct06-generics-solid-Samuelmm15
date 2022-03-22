/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
import {series} from './ejercicio-2-series';
import {films} from './ejercicio-2-films';
import {documentary} from './ejercicio-2-documentary';

export const sexEducation =
  new series(`Sex Education`, 2019, `Serie`, `Comedia`, 3, []);

export const gameOfThrones =
  new series(`Juego de Tronos`, 2011, `Serie`, `Fantasía`, 8, []);

export const totallySeries =
  new series(``, 0, ``, ``, 0, []);

totallySeries.addSeries(sexEducation);
totallySeries.addSeries(gameOfThrones);
totallySeries.nameFilter();
totallySeries.ageFilter();
totallySeries.categoryFilter();

export const starWars =
  new films(`Star Wars`, 1977, `Película`, `Ciencia Ficción`,
      `George Lucas`, []);

export const backToTheFuture =
  new films(`Regreso al Futuro`, 1985, `Película`, `Ciencia Ficción`,
      `Bob Gale`, []);

export const totallyFilms =
  new films(``, 0, ``, ``, ``, []);

totallyFilms.addFilm(starWars);
totallyFilms.addFilm(backToTheFuture);
totallyFilms.nameFilter();
totallyFilms.ageFilter();
totallyFilms.categoryFilter();

export const goldAgeSamurais =
  new documentary(`La edad de Oro de los samuráis`, 2021, `Documental`, `Historia`, `Netflix`, []);

export const ourPlanet =
  new documentary(`Nuestro Planeta`, 2019, `Documental`, `Animal`, `National Geographic`, []);

export const totallyDocumentarys =
  new documentary(``, 0, ``, ``, ``, []);

totallyDocumentarys.addDocumentary(goldAgeSamurais);
totallyDocumentarys.addDocumentary(ourPlanet);
totallyDocumentarys.nameFilter();
totallyDocumentarys.ageFilter();
totallyDocumentarys.categoryFilter();


