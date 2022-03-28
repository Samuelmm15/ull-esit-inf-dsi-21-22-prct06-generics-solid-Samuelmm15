/**
 * This class makes an array of Prime Numbers
 */
export class PrimeNumbers {
  private primeVector: number[] = [];
  private primeVectorResult: Set<number>;
  private static counter: number = 0;
  private static PrimeNumbersInstance: PrimeNumbers;
  /**
   * This is the constructor of the class
   * @param items Consists in a list of numbers
   */
  constructor(items: number[]) {
    this.primeVector = items;
    this.primeVectorResult = new Set(items);
  }
  /**
   * This function generates an only one Instance of the class
   * @param items Consists in the list of items
   * @returns The object
   */
  public static getPrimeNumbersInstance(items: number[]): PrimeNumbers {
    if (this.counter === 0) {
      this.PrimeNumbersInstance = new PrimeNumbers(items);
      this.counter = 1;
    }
    return this.PrimeNumbersInstance;
  }
  /**
   * Consists in a function to make the factorial
   * @param n Consists in the number to make the factorial
   * @returns The factorial number
   */
  private factorial(n: number) {
    let i: number = 0;
    let total: number = 1;
    for (i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
  }
  /**
   * This function sets values into the vector
   * @param item 
   */
  setNumbers(item: number) {
    this.primeVector.push(item);
  }
  /**
   * This function get the numbers in a specific position
   * @param position Consists in the position limit
   * @returns Returns the list of values
   */
  getNnumbers(position: number): IterableIterator<number> {
    this.primeVectorResult.clear();
    let i: number = 0;
    let auxiliary: number = 0;
    for (i = 0; i < position; i++) {
      auxiliary = this.factorial((this.primeVector[i] - 1)) + 1;
      if ((auxiliary % this.primeVector[i]) === 0) {
        this.primeVectorResult.add(this.primeVector[i]);
      }
      auxiliary = 0;
    }
    return this.primeVectorResult.values();
  }
  /**
   * This function returns a range of prime numbers
   * @param positionN Consists in the first position
   * @param positionM Consists in the second position
   * @returns The list of prime vectors
   */
  // eslint-disable-next-line max-len
  getRangeNumbers(positionN: number, positionM: number): IterableIterator<number> {
    this.primeVectorResult.clear();
    let i: number = 0;
    let auxiliary:number = 0;
    for (i = positionN; i < positionM; i++) {
      auxiliary = this.factorial((this.primeVector[i] - 1)) + 1;
      // eslint-disable-next-line max-len
      if (((auxiliary % this.primeVector[i]) === 0)) {
        this.primeVectorResult.add(this.primeVector[i]);
      }
      auxiliary = 0;
    }
    return this.primeVectorResult.values();
  }
}
