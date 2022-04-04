/* eslint-disable max-len */
import {Strategy} from './strategy';

/**
 * This is the merge sort algorithm
 */
export class MergeSort implements Strategy {
  execute(numbersArray: number[]): void {
    // eslint-disable-next-line prefer-const
    let numbersArrayAuxiliary: number[] = [];
    const n: number = numbersArray.length;
    this.copyArray(numbersArray, 0, n, numbersArrayAuxiliary);
    this.topDownSplitMerge(numbersArrayAuxiliary, 0, n, numbersArray);
    console.log(numbersArray);
  }
  copyArray(numbersArray: number[], iBegin: number,
      iEnd: number, numbersArrayAuxiliary: number[]) {
    for (let k = iBegin; k < iEnd; k++) {
      numbersArrayAuxiliary.push(numbersArray[k]);
    }
  }
  topDownSplitMerge(numbersArrayAuxiliary: number[],
      iBegin: number, iEnd: number, numbersArray: number[]) {
    let sorted: boolean = false;
    if ((iEnd - iBegin) <= 1) {
      sorted = true;
    }
    if (sorted === false) {
      const iMiddle = (iEnd + iBegin) / 2;
      this.topDownSplitMerge(numbersArray, iBegin, iMiddle, numbersArrayAuxiliary);
      this.topDownSplitMerge(numbersArray, iMiddle, iEnd, numbersArrayAuxiliary);
      this.topDownMerge(numbersArrayAuxiliary, iBegin, iMiddle, iEnd, numbersArray);
    }
  }
  topDownMerge(numbersArray: number[], iBegin: number,
      iMiddle: number, iEnd: number, numbersArrayAuxiliary: number[]) {
    let i = iBegin;
    let j = iMiddle;
    for (let k = iBegin; j < iEnd; k++) {
      if ((i < iMiddle) && (j >= iEnd || numbersArray[i] <= numbersArray[j])) {
        numbersArrayAuxiliary[k] = numbersArray[i];
        i++;
      } else {
        numbersArrayAuxiliary[k] = numbersArray[j];
        j++;
      }
    }
  }
}
