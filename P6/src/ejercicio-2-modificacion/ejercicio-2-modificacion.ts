import {PrimeNumbers} from './ejercicio-2-modificacion-primeNumbers';

const numbersVector: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 16];
// eslint-disable-next-line max-len
export const primeNumbersExample = PrimeNumbers.getPrimeNumbersInstance(numbersVector);

const example = primeNumbersExample.getNnumbers(1);
console.log(example);
const example1 = primeNumbersExample.getRangeNumbers(0, 9);
console.log(example1);
