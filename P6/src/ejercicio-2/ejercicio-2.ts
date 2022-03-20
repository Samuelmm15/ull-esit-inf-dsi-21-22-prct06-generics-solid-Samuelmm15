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
    console.log();
    // eslint-disable-next-line max-len
    console.log(`La lista de series del catálogo ordenada por orden alfabético es: `);
    console.log(result);
  }
  ageFilter(): any {
    let i: number = 0;
    let auxiliaryResult: any[] = [];
  }
  categoryFilter(): any {
    console.log();
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
    console.log();
  }
  ageFilter(): any {
    console.log();
  }
  categoryFilter(): any {
    console.log();
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
    console.log();
  }
  ageFilter(): any {
    console.log();
  }
  categoryFilter(): any {
    console.log();
  }
}


const sexEducation =
  new series(`Sex Education`, 2019, `Serie`, `Comedia`, 3, []);

const gameOfThrones =
  new series(`Juego de Tronos`, 2011, `Serie`, `Fantasía`, 8, []);

const totallySeries =
  new series(``, 0, ``, ``, 0, []);

totallySeries.addSeries(sexEducation);
totallySeries.addSeries(gameOfThrones);
totallySeries.nameFilter();


