# / PRÁCTICA 6: CLASES E INTERFACES GENÉRICAS. PRINCIPIOS SOLID

## // ÍNDICE

1. [Tareas Previas](#id1)
2. [Ejercicios](#id2) \
    2.1 [Ejercicio 1](#id3) \
    2.2 [Ejercicio 2](#id4) \
    2.3 [Ejercicio 3](#id5)

## // Tareas previas <a name="id1"></a>

Para la realización de esta sexta práctica de la asignatura `Desarrollo de Sistemas Informáticos`, se requiere 
de la lectura y visualización de un vídeo previo a la realización de la práctica.

Dicho vídeo, explica la intalación y el uso de dos herramientas que permiten el cubrimiento de código para 
TypeScript. La primera de estas herramientas es [Instambul](https://istanbul.js.org)
, esta, se encarga de generar un informe de cubrimiento del código desarrollado en TypeScript. Por otro lado, se 
encuentra la herramienta [Coverralls](https://coveralls.io)
. Dicha herramienta, se encagra de obtener el informe de cubrimiento generado gracias a **Instambull** y subirlo 
a su página web, permitiendo visualizar dicho informe de manera más detallada y pudiendo observar otras 
características de este.

## // Ejercicios <a name="id2"></a>

Tras la realización de las tareas previas expuestas anteriormente, se continua con la realización de los 
ejercicios solicitados en el [guión](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/) 
de la práctica. Para ello, haciendo uso de la estructura básica del desarrollo de proyectos en TypeScript. Se 
crea un directorio para cada ejercicio solicitado, dentro de `./src`, con la estructura
`/ejercicio-n/ejericio-n.ts`.

Además, hay que tener en cuenta que cada una de las clases desarrolladas para cada ejercicio, se deben de 
encontrar en ficheros distintos.

### /// Ejercicio 1 - El combate definitivo <a name="id3"></a>

Para este primer ejercicio, se solicita el desarrollo de un programa, que permita que, haciendo uso de la 
implementación realizada para el [Ejercicio 1](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/) 
de la quinta práctica de la asignatura. Se puedan añadir nuevos universos a el primer universo Pokemon que había 
sido realizado.

Para poder conseguir esto, se crea una interfaz genérica denominada como `character`, esta, permte definir la 
estructura de los objetos de las clases universo que posteriormente serán desarrolladas. Dicha interfaz se puede 
observar a continuación:

```
interface character {
  name: string;
  weight: number;
    height: number;
    attack: number;
    defense: number;
    speed: number;
    healthPoints: number;
}
```

Posteriormente, se desarrolla una clase abstracta denominada como `fighter`. Esta, será la base de todas las 
clases universo que sean implementadas después. Esta clase, se puede ver a continuación:

```
abstract class fighter implements character {
  constructor(public readonly name: string, public weight: number,
      public height: number, public attack: number, public defense: number,
      public speed: number, public healthPoints: number) {
  }
}
```

Para este caso en concreto, para la realización de este primer ejercicio, únicamente se hará uso de tres 
universos que cumplan el objetivo de la práctica. El primero de ellos es el universo `Pokemon`, cuyo desarrollo 
es:

```
class pokemonUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public pokemonType: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
```

Por otro lado, se tiene el universo `Star Wars` que tiene el siguiente aspecto:

```
class starWarsUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public catchingPhrase: string) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
```

Para finalizar, se tiene el último universo seleccionado para este ejercicio, este es, el universo de `Dragon Ball`:

```
class dragonBallUniverse extends fighter {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, speed: number,
      healthPoints: number, public level: number) {
    super(name, weight, height, attack, defense, speed,
        healthPoints);
  }
}
```

Tras la implementación de estos tres unviersos, se procede al desarrollo de la clase `Combat`. Esta, se encarga 
de reproducir una lucha entre dos personajes de cualquiera de los universos que hayan sido seleccionado 
anteriormente.

Para ello, se desarrollan dos métodos dentro de dicha clase. El primero de ellos es el método `damageProduction`. 
Este, devuelve el daño que produce un combatiente a su contrincante, dependiendo de si se trata del universo 
Pokemon, Star Wars o Dragon Ball. Para el primero de estos universos, dependiendo del tipo de pokemon u otro, la 
eficacia de su ataque dependerá de ello. Por otro lado, para los combatientes de los universos Star Wars y Dragon 
Ball, la eficiencia del ataque de un combatiente, dependerá de los puntos de ataque que tiene el combatiente y de 
los puntos de defensa que tiene su contrincante.

La implementación de la función se puede ver a continuación:

```
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
```

Por otro lado, el otro método desarrollado en la clase `Combat`, se denomina como `start`. Este método, se 
encarga de simular la lucha entre los dos combatientes. Devolviendo finalmente, el ganador de la lucha. El 
desarrollo del método se puede ver:

```
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
```

Para finalizar, se desarrolla una última clase, denominada como `Pokedex`. Esta, se encarga de introducir los 
distintos personajes de los distintos universos en listas, dónde, pueden ser observadas todas las características 
de todos los personajes de los distintos universos que sean introducidos a dicha *Pokedex*.

```
class pokedex {
  constructor() {
  }
  addToPokedex(...element: any[]) {
    const pokemonArray: pokemonUniverse[] = [];
    const starWarsArray: starWarsUniverse[] = [];
    const dragonBallArray: dragonBallUniverse[] = [];
    // eslint-disable-next-line no-unused-vars
    let person: any;
    element.forEach((person) => {
      if ("pokemonType" in person) {
        pokemonArray.push(person);
      } else if ("catchingPhrase" in person) {
        starWarsArray.push(person);
      } else if ("level" in person) {
        dragonBallArray.push(person);
      }
    });
    const entry = require('prompt-sync')({sigit: true});
    let optionPrint: string = ``;
    console.log();
    optionPrint = entry(`Desea imprimir por pantalla la pokedex (S/N): `);
    if (optionPrint === `S`) {
      console.log(`La Pokedex de Pokemon es: `);
      console.log(pokemonArray);
      console.log();
      console.log(`La Pokedex de Star Wars es: `);
      console.log(starWarsArray);
      console.log();
      console.log(`La pokedex de Dragon Ball es:`);
      console.log(dragonBallArray);
      console.log();
    }
  }
}
```

La ejecución del programa se puede ver en la siguiente imagen:

![exercise-1-execution](https://user-images.githubusercontent.com/72341631/159565588-eaec3173-0b10-45c7-8d14-c94c12daa0ad.png)

![exercise-1-execution-1](https://user-images.githubusercontent.com/72341631/159565615-8655e906-8991-4224-a7b2-42a4ca2abdff.png)

El testeo del primer ejercicio se observa en la imagen adjunta a continuación:

![exercise-1-test](https://user-images.githubusercontent.com/72341631/159565647-e0f6085a-4edf-43c0-9d7c-53c16df2d757.png)

![exercise-1-coverage](https://user-images.githubusercontent.com/72341631/159565680-8095ed09-3116-4786-bcd4-ccd2b3736466.png)

### Ejercicio 2 - DSIflix <a name="id4"></a>

En el segundo ejercicio, se solicita el diseño del acceso al catálogo de una plataforma de streaming que posee 
tanto series, como películas y documentales.

Para conseguir esto, se desarrollan 4 interfaces genéricas. La primera de ellas, se encarga de definir la 
estructura de todos los objetos del catálogo de la plataforma. Por otro lado, las tres restantes se encargan de 
definir ciertas características concretas de los distitnos elementos del catálogo, es decir, una interfaz para 
las series, otra para las películas y otra para los documentales.

Todas las interfaces que han sido nombradas anteriormente se pueden ver a continuación:

**Interfaz general para todos los elementos del catálogo:**
```
interface streamable<T> {
  name: string;
  age: number;
  type: string;
  category: string;
  nameFilter(): T;
  ageFilter(): T;
  categoryFilter(): T;
}
```

**Interfaz para las series:**

```
interface streamable_serie<T> {
  addSeries(serieAdd: T): void;
  seasons: number;
}
```

**Interfaz para las películas:**

```
interface streamable_film<T> {
  addFilm(filmAdd: T): void;
  production: string;
}
```

**Interfaz para los documentales:**

```
interface streamable_documentary<T> {
  addDocumentary(documentaryAdd: T): void;
  company: string;
}
```

A continuación, se hace uso de una clase abstracta denominada como `basicStreamableCollection`, que será útil 
para poder desarrollar clases específicas para las series, las películas y los documentales.

```
abstract class basicStreamableCollection implements streamable<any> {
  constructor(public name: string, public age: number, public type: string,
      public category: string) {
  }
    abstract nameFilter(): any;
    abstract ageFilter(): any;
    abstract categoryFilter(): any;
}
```

En consecuencia, se comienza con la realización de la clase `series`. Esta, implementa tres métodos que permiten 
la ordenación del catálogo, dependiendo de si se trata por orden alfabético de su nombre, por su fecha de emisión 
o por su categoría.

El primero de estos métodos es `nameFilter`, este se encarga de ordenar la lista de series de manera que se 
muestren por pantalla ordenadas por orden alfabético según el nombre de cada una de las series:

```
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
        if ((result[i] === this.seriesArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.seriesArray[j]);
        }
      }
    }
    console.log();
    console.log(`La lista de series del catálogo ordenada por orden alfabético es: `);
    console.log(finalResult);
  }
```

El segundo de estos métodos es `ageFilter`. El método, se encarga de ordenar las series según el año de emisión 
de cada una de las series que se encuentren dentro del catálogo. Esto se puede observar a continuación:

```
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
```

Por último, el tercer método es `categoryFilter`. Este, ordena las series del catálogo, según el tipo de serie 
del que se trate, es decir, dependiendo de la categoría de la serie. Pueden ser, de categoría de miedo, de 
comedia, etc.

```
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
```

Tras el desarrollo de la clase `series`, se continua con las demás clases, necesarias para los distintos 
elementos que componen el catálogo, es decir, para las películas y los documentales. Hay que tener en cuenta que, 
el desarrollo de los métodos de ambas clases (`films`, `documentary`) es de manera similar a los métodos 
implementados en la clase `series`, pero, aplicados a los elementos de tipo `films` y `documentary`.

Por tanto, la clase `films` se puede observar:

```
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
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if ((result[i] === this.FilmsArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
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
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if ((result[i] === this.FilmsArray[j].age) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
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
    let counter: number = 0;
    for (i = 0; i < this.FilmsArray.length; i++) {
      for (j = 0; j < this.FilmsArray.length; j++) {
        if ((result[i] === this.FilmsArray[j].category) && (counter < result.length)) {
          counter++;
          finalResult.push(this.FilmsArray[j]);
        }
      }
    }
    console.log();
    console.log(`La lista de películas del catálogo ordenada por orden categoría es: `);
    console.log(finalResult);
  }
}
```

La clase `documentary`:

```
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
    let counter: number = 0;
    for (i = 0; i < this.documentaryArray.length; i++) {
      for (j = 0; j < this.documentaryArray.length; j++) {
        if ((result[i] === this.documentaryArray[j].name) && (counter < result.length)) {
          counter++;
          finalResult.push(this.documentaryArray[j]);
        }
      }
    }
    console.log();
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
    console.log(`La lista de documentales del catálogo ordenada por orden categoría es: `);
    console.log(finalResult);
  }
}
```

Finalmente, la ejecución del programa se puede observar en la imagen adjunta a continuación:

![exercise-2-execution](https://user-images.githubusercontent.com/72341631/159565754-d456300d-87c3-4409-a56c-ef04a8f310ed.png)

![exercise-2-execution-1](https://user-images.githubusercontent.com/72341631/159565772-e476795e-54a5-42b1-a90f-31a6859c79a0.png)

El testeo de este:

![exercise-2-test](https://user-images.githubusercontent.com/72341631/159565810-9adf35f9-9d06-4f19-ae33-1884531b12ba.png)

### Ejercicio 3 - El cifrado indescifrable <a name="id5"></a>

Para este tercer y último ejercicio, se solicita la implementación del [Cifrado de César](https://es.wikipedia.org/wiki/Cifrado_César), este, se trata de un cifrado que, haciendo uso de un alfabeto de entrada y una clave, 
permite el cifrado y descifrado de una cadena de texto que pretende cifrar.

Para comenzar, se implementa una interfaz genérica denominada como `cipherElements`. Esta incluye, los métodos de 
cifrado y descifrado que serán usados posteriormente para poder desarrollar la clase del cifrado de César. Esta 
interfaz queda plasmada a continuación:

```
interface cipherElements<T> {
  cipherFunction(): T;
  decipherFunction(cipherWord: T): T;
}
```

A continuación, se desarrolla una clase abstracta denominada como `cipher`, que permite definir distintas clases 
de algoritmos de cifrado a continuación, pero en este caso, para este ejercicio, únicamente se va a realizar la 
implementación del cifrado de César. Dicha clase abstracta:

```
abstract class cipher implements cipherElements<string> {
  constructor(protected alphabet: string, protected key: string,
      protected word: string) {
  }
    abstract cipherFunction(): string;
    abstract decipherFunction(cipherWord: string): string;
}
```

Para finalizar, se implementa la clase `cesarCipher`. Esta, desarrolla dos métodos:

El primero de ellos se denomina como `cipherFunction`. Este método, se encarga de recorrer el alfabeto 
intrducido, comparando los caracteres de la cadena a cifrar y la clave de cifrado uno por uno, de manera que la 
distancia que se produce entre ambos caracteres, será sumanda para obtener un nuevo caracter totalmente distinto, 
generando por tanto, la nueva cadena cifrada.

```
cipherFunction(): string {
    // To equal the key to the word
    if (this.key.length <= this.word.length) {
      const auxiliaryKey: string = this.key;
      let i: number = 0;
      let j: number = 0;
      const finalI: number = this.word.length - this.key.length;
      const finalJ: number = this.key.length;
      for (i = 0; i < finalI; i++) {
        if (j === finalJ) {
          j = 0;
        }
        this.key = this.key + auxiliaryKey[j];
        j++;
      }
      console.log();
      console.log(`Palabra a cifrar: `);
      console.log(this.word);
      console.log(`Clave de cifrado: `);
      console.log(this.key);
    }
    // Cesar Cipher
    let i: number = 0;
    let j: number = 0;
    let cipherLength: number = 0;
    let keyLength: number = 0;
    let cipherResult: string = ``;
    let decipher: number = 0;
    for (i = 0; i < this.word.length; i++) {
      // To calculates de key
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] === this.word[i]) {
          cipherLength = j;
        }
        if (this.alphabet[j] === this.key[i]) {
          keyLength = j;
        }
      }
      decipher = ((cipherLength + keyLength) % (this.alphabet.length - 1));
      cipherResult = cipherResult + this.alphabet[decipher];
    }
    console.log(`Palabra cifrada: `);
    console.log(cipherResult);
    return cipherResult;
  }
```

Por otro lado, se implementa el método `decipherFunction`. Este, compara los caracteres de la cadena cifrada, 
junto con la clave que ha recibido dentro del alfabeto de cifrado. Las posiciones de ambos caracteres dentro del 
alfabeto, serán restadas, de manera que se obtene un nuevo caracter, siendo este, el caracter de la cadena 
original que había sido cifrada.

```
decipherFunction(cipherWord: string): string {
    // To equal the key to the cipher word
    if (this.key.length <= cipherWord.length) {
      const auxiliaryKey: string = this.key;
      let i: number = 0;
      let j: number = 0;
      const finalI: number = cipherWord.length - this.key.length;
      const finalJ: number = this.key.length;
      for (i = 0; i < finalI; i++) {
        if (j === finalJ) {
          j = 0;
        }
        this.key = this.key + auxiliaryKey[j];
        j++;
      }
      console.log();
      console.log(`Palabra cifrada: `);
      console.log(cipherWord);
      console.log(`Clave de cifrado: `);
      console.log(this.key);
    }
    // Cesar decipher
    let i: number = 0;
    let j: number = 0;
    let cipherLength: number = 0;
    let keyLength: number = 0;
    let decipherResult: string = ``;
    let decipher: number = 0;
    for (i = 0; i < cipherWord.length; i++) {
      // To calculates de key
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] === cipherWord[i]) {
          cipherLength = j;
        }
        if (this.alphabet[j] === this.key[i]) {
          keyLength = j;
        }
      }
      decipher = cipherLength - keyLength;
      if (decipher < 0) {
        decipher = decipher + (this.alphabet.length - 1);
      }
      decipherResult = decipherResult + this.alphabet[decipher];
    }
    console.log(`Palabra descifrada: `);
    console.log(decipherResult);
    return decipherResult;
  }
```

La ejecución del programa se puede ver a continuación:

![excersice-3-execution](https://user-images.githubusercontent.com/72341631/159565901-95ecdc28-3adb-414f-8d45-af854064ad9a.png)

El testeo de la implementación se observa:

![exercise-3-test](https://user-images.githubusercontent.com/72341631/159565921-299d4b3f-165b-432b-b87c-7ce686c16798.png)

En conclusión, esta sexta práctica de la asignatura, me ha ayudado a familiarizarme un poco más con los 
principios SOLID y su uso, no tan solo para TypeScript, sino también el posible uso de estos principios en otros 
lenguajes de programación.

Por otro lado, el uso de la herencia, de interfaces generales, clases abstractas, etc, me ha permitido aprender 
sobre la programación orienta a objetos, ya que muchos otros lenguajes permiten este tipo de programación, por 
tanto, el uso de este tipo de facilidades, permite un desarrollo, mucho más completo, seguro y optimizado.
