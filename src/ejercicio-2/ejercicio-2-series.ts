/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
import {basicStreamableCollection} from './ejercicio-2-basicStreamableCollection';
import {streamable_serie} from './ejercicio-2-streamable_serie';
/**
 * This class defines the series objects.
 */
export class series extends basicStreamableCollection implements
 streamable_serie<any> {
  /**
  * This is the constructor of the class.
  * @param name Consists in the name of the serie.
  * @param age Consists in the age of emition of the serie.
  * @param type Consists in the type of object.
  * @param category Consists in the category of the serie.
  * @param seasons Consists in the number of seasons of the serie.
  * @param seriesArray Consists in the array of series.
  */
  constructor(name: string, age: number, type: string,
      category: string, public seasons: number, private seriesArray: any[]) {
    super(name, age, type, category);
  }
  /**
  * This function adds differents series into a list of them.
  * @param serieAdd Consists in the serie to add.
  */
  addSeries(serieAdd: any) {
    this.seriesArray.push(serieAdd);
  }
  /**
  * This function filters the list of series into alphabetic order.
  */
  nameFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.seriesArray.length; i++) {
      auxiliaryResult.push(this.seriesArray[i].name);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.seriesArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de series del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
  /**
  * This function filters the list of series into year order.
  */
  ageFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.seriesArray.length; i++) {
      auxiliaryResult.push(this.seriesArray[i].age);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.seriesArray[j].age) && (counter < result.length)) {
          counter++;
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de serie del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
  /**
  * This function filters the list of series into category alphabetic order.
  */
  categoryFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.seriesArray.length; i++) {
      auxiliaryResult.push(this.seriesArray[i].category);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.seriesArray[j].category) && (counter < result.length)) {
          counter++;
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de serie del catálogo ordenada por orden categoría es: `);
    console.log(finalResult);
  }
}
