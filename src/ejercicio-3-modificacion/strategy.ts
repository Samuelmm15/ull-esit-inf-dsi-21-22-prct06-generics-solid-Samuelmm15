/**
 * This is the strategy interface to implements the
 * strategy design
 */
export interface Strategy {
  execute(numbersArray: number[]): void;
}
