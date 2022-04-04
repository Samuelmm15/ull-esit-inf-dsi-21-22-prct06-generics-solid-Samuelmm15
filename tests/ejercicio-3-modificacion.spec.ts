import 'mocha';
// eslint-disable-next-line no-unused-vars
import {expect} from 'chai';
import {Solve} from '../src/ejercicio-3-modificacion/solve';
import {BubleSort} from '../src/ejercicio-3-modificacion/bubble-sort';
// eslint-disable-next-line no-unused-vars
import {MergeSort} from '../src/ejercicio-3-modificacion/merge-sort';

describe('Bubble Sort algorithm tests', () => {
  it('First test', () => {
    const solver = new Solve([5, 4, 9, 1, 3, 6], new BubleSort());
    solver.logic();
  }),
  it('Second test', () => {
    const solver = new Solve([5, 9, 1, 2, 6, 10, 500], new BubleSort());
    solver.logic();
  }),
  it('Thirth test', () => {
    const solver = new Solve([100, 500, 1000, 1, 3], new BubleSort());
    solver.logic();
  });
});

describe('Merge Sort algorithm tests', () => {
  it('First test', () => {
    const solver = new Solve([5, 4, 9, 1, 3, 6], new BubleSort());
    solver.logic();
  }),
  it('Second test', () => {
    const solver = new Solve([5, 9, 1, 2, 6, 10, 500], new BubleSort());
    solver.logic();
  }),
  it('Thirth test', () => {
    const solver = new Solve([100, 500, 1000, 1, 3], new BubleSort());
    solver.logic();
  });
});
