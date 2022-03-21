/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */

/**
 * This interface defines the structure of the
 * different streaming objects.
 */
interface streamable<T> {
  name: string;
  age: number;
  type: string;
  category: string;
  nameFilter(): T;
  ageFilter(): T;
  categoryFilter(): T;
}

/**
 * This interface defines the structure of
 * the series objetcs.
 */
interface streamable_serie<T> {
  addSeries(serieAdd: T): void;
  seasons: number;
}

/**
 * This interface defines the structure of
 * the films objects.
 */
interface streamable_film<T> {
  addFilm(filmAdd: T): void;
  production: string;
}

/**
 * This interface defines the structure of
 * the documentary objects.
 */
interface streamable_documentary<T> {
    addDocumentary(documentaryAdd: T): void;
    company: string;
}

/**
 * This is the class neccesary to define the structure
 * of the different streaming objects.
 */
abstract class basicStreamableCollection implements streamable<any> {
  /**
   * This is the constructor of the abstract class.
   * @param name Consists in the name of the object.
   * @param age Consists in the age of the emission.
   * @param type Consists in the type of the object.
   * @param category Consist in the genere of the object.
   */
  constructor(public name: string, public age: number, public type: string,
    public category: string) {
  }
  /**
   * This function filters the objects in alphabetic order.
   */
  abstract nameFilter(): any;
  /**
   * This function filters the objects in age order.
   */
  abstract ageFilter(): any;
  /**
   * This function filters the objects in category alphabetic
   * order.
   */
  abstract categoryFilter(): any;
}

/**
 * This class defines the series objects.
 */
class series extends basicStreamableCollection implements
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

/**
 * This class defines the films objects.
 */
class films extends basicStreamableCollection implements streamable_film<any> {
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

/**
 * This class defines the structure of the documentary objects.
 */
class documentary extends basicStreamableCollection
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


