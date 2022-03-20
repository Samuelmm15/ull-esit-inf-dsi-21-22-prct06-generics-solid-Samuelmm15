/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
interface streamable<T> {
  name: string;
  age: number;
  type: string;
  category: string;
  nameFilter(): T;
  ageFilter(): T;
  categoryFilter(): T;
}

interface streamable_serie<T> {
  addSeries(serieAdd: T): void;
  seasons: number;
}

interface streamable_film<T> {
  addFilm(filmAdd: T): void;
  production: string;
}

interface streamable_documentary<T> {
    addDocumentary(documentaryAdd: T): void;
    company: string;
}

abstract class basicStreamableCollection implements streamable<any> {
  constructor(public name: string, public age: number, public type: string,
    public category: string) {
  }
  abstract nameFilter(): any;
  abstract ageFilter(): any;
  abstract categoryFilter(): any;
}

class series extends basicStreamableCollection implements
  streamable_serie<any> {
  constructor(name: string, age: number, type: string,
      category: string, public seasons: number, private seriesArray: any[]) {
    super(name, age, type, category);
  }
  addSeries(serieAdd: any) {
    this.seriesArray.push(serieAdd);
  }
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
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        if (result[i] === this.seriesArray[j].name) {
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de series del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        if (result[i] === this.seriesArray[j].age) {
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de serie del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.seriesArray.length; i++) {
      for (j = 0; j < this.seriesArray.length; j++) {
        if (result[i] === this.seriesArray[j].category) {
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

class films extends basicStreamableCollection implements streamable_film<any> {
  constructor(name: string, age: number, type: string,
      category: string, public production: string, private FilmsArray: any[]) {
    super(name, age, type, category);
  }
  addFilm(filmAdd: any): void {
    this.FilmsArray.push(filmAdd);
  }
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
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if (result[i] === this.FilmsArray[j].name) {
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de películas del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if (result[i] === this.FilmsArray[j].age) {
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de películas del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if (result[i] === this.FilmsArray[j].category) {
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

class documentary extends basicStreamableCollection
  implements streamable_documentary<any> {
  constructor(name: string, age: number, type: string,
      category: string, public company: string,
      private documentaryArray: any[]) {
    super(name, age, type, category);
  }
  addDocumentary(documentaryAdd: any): void {
    this.documentaryArray.push(documentaryAdd);
  }
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
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if (result[i] === this.documentaryArray[j].name) {
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de documentales del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if (result[i] === this.documentaryArray[j].age) {
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de documentales del catálogo ordenada por orden de año de estreno es: `);
    console.log(finalResult);
  }
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
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if (result[i] === this.documentaryArray[j].category) {
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


const sexEducation =
  new series(`Sex Education`, 2019, `Serie`, `Comedia`, 3, []);

const gameOfThrones =
  new series(`Juego de Tronos`, 2011, `Serie`, `Fantasía`, 8, []);

const totallySeries =
  new series(``, 0, ``, ``, 0, []);

// totallySeries.addSeries(sexEducation);
// totallySeries.addSeries(gameOfThrones);
// totallySeries.nameFilter();
// totallySeries.ageFilter();
// totallySeries.categoryFilter();

const starWars =
  new films(`Star Wars`, 1977, `Película`, `Ciencia Ficción`,
      `George Lucas`, []);

const backToTheFuture =
  new films(`Regreso al Futuro`, 1985, `Película`, `Ciencia Ficción`,
      `Bob Gale`, []);

const totallyFilms =
  new films(``, 0, ``, ``, ``, []);

totallyFilms.addFilm(starWars);
totallyFilms.addFilm(backToTheFuture);
totallyFilms.nameFilter();
totallyFilms.ageFilter();
totallyFilms.categoryFilter();


