import {Strategy} from './strategy';

/**
 * This is the bubble sort algorithm
 */
export class BubleSort implements Strategy {
  execute(numbersArray: number[]): void {
    let i = 0;
    let swaped: boolean = true;
    while (swaped === true) {
      swaped = false;
      for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i - 1] > numbersArray[i]) {
          const auxiliary: number = numbersArray[i];
          numbersArray[i] = numbersArray[i - 1];
          numbersArray[i - 1] = auxiliary;
          swaped = true;
        }
      }
    }
    console.log(numbersArray);
  }
}
