/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
import {basicStreamableCollection} from './ejercicio-2-basicStreamableCollection';
import {streamable_film} from './ejercicio-2-streamable_film';
/**
 * This class defines the films objects.
 */
export class films extends basicStreamableCollection implements streamable_film<any> {
  /**
     * This is the constructor of the class.
     * @param name Consists in the name of the film.
     * @param age Consists in the year emission of the film.
     * @param type Consists in the type of the object.
     * @param category Consists in the category of the film.
     * @param production Consists in the producer of the film.
     * @param FilmsArray Consists in the list of films.
     */
  constructor(name: string, age: number, type: string,
      category: string, public production: string, private FilmsArray: any[]) {
    super(name, age, type, category);
  }
  /**
     * This function adds films into the film array.
     * @param filmAdd Consists in the film to add.
     */
  addFilm(filmAdd: any): void {
    this.FilmsArray.push(filmAdd);
  }
  /**
     * This function filters the list of films into alphabetic order.
     */
  nameFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.FilmsArray.length; i++) {
      auxiliaryResult.push(this.FilmsArray[i].name);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.FilmsArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de películas del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
  /**
     * This function filters the list of films into year order.
     */
  ageFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.FilmsArray.length; i++) {
      auxiliaryResult.push(this.FilmsArray[i].age);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.FilmsArray[j].age) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de películas del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
  /**
     * This function filters the list of films into category alphabetic order.
     */
  categoryFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.FilmsArray.length; i++) {
      auxiliaryResult.push(this.FilmsArray[i].category);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.FilmsArray[j].category) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de películas del catálogo ordenada por orden categoría es: `);
    console.log(finalResult);
  }
}
