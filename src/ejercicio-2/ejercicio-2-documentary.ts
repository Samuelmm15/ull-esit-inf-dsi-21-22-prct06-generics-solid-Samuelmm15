/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
import {basicStreamableCollection} from './ejercicio-2-basicStreamableCollection';
import {streamable_documentary} from './ejercicio-2-streamable_documentary';
/**
 * This class defines the structure of the documentary objects.
 */
export class documentary extends basicStreamableCollection
  implements streamable_documentary<any> {
  /**
  * This is the constructor of the class.
  * @param name Consists in the name of the documentary.
  * @param age Consists in the age of emission of the documentary.
  * @param type Consists in the type of object.
  * @param category Consists in the category of the documentary.
  * @param company Consists in the company that produces the documentary.
  * @param documentaryArray Cosists in the list of documentarys.
  */
  constructor(name: string, age: number, type: string,
      category: string, public company: string,
     private documentaryArray: any[]) {
    super(name, age, type, category);
  }
  /**
  * This function adds a documentary into a list of documentarys.
  * @param documentaryAdd Consists in the documentary to add.
  */
  addDocumentary(documentaryAdd: any): void {
    this.documentaryArray.push(documentaryAdd);
  }
  /**
  * This function filters the list of documentary into alphabetic order.
  */
  nameFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.documentaryArray.length; i++) {
      auxiliaryResult.push(this.documentaryArray[i].name);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        // eslint-disable-next-line max-len
        if ((result[i] === this.documentaryArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de documentales del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
  /**
  * This function filters the list of documentary into year order.
  */
  ageFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.documentaryArray.length; i++) {
      auxiliaryResult.push(this.documentaryArray[i].age);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if ((result[i] === this.documentaryArray[j].age) && (counter < result.length)) {
          counter++;
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de documentales del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
  /**
  * This function filters the list of documentarys into category alphabetic order.
  */
  categoryFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
    let result: any[] = [];
    for (i = 0; i < this.documentaryArray.length; i++) {
      auxiliaryResult.push(this.documentaryArray[i].category);
    }
    result = auxiliaryResult.sort();
    let finalResult: any[] = [];
    let j: number = 0;
    let counter: number = 0;
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if ((result[i] === this.documentaryArray[j].category) && (counter < result.length)) {
          counter++;
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de documentales del catálogo ordenada por orden categoría es: `);
    console.log(finalResult);
  }
}
