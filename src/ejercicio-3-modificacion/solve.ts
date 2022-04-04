import {Strategy} from './strategy';

/**
 * This is the class to implements the strategy
 * design
 */
export class Solve {
  /**
   * This is the constructor of the class
   * @param numbersArray Consists in the array of numbers
   * @param strategy Consists in the strategy to use
   */
  constructor(private numbersArray: number[], private strategy: Strategy) {
  }
  /**
   * To set a new strategy
   * @param strategy Consists in the algorithm to use
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  /**
   * This function implements the executation
   */
  logic() {
    this.strategy.execute(this.numbersArray);
  }
}
