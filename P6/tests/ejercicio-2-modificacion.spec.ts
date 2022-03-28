/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {primeNumbersExample} from '../src/ejercicio-2-modificacion/ejercicio-2-modificacion';

describe('primeNumbersExample class tests', () => {
  it('primeNumbersExample.getNnumbers(1) returns values 1', () => {
    expect(primeNumbersExample.getNnumbers(1)).to.be.equal([1]);
  }),
  it('primeNumbersExample.getNnumbers(5) returns values 1', () => {
    expect(primeNumbersExample.getNnumbers(5)).to.be.eqls([1]);
  }),
  it('primeNumbersExample.getNnumbers(8) returns values 1', () => {
    expect(primeNumbersExample.getNnumbers(8)).to.be.eqls([1]);
  }),
  it('primeNumbersExample.getRangeNumbers(0, 9) returns values 1', () => {
    expect(primeNumbersExample.getRangeNumbers(0, 9)).to.be.eqls([1]);
  }),
  it('primeNumbersExample.getRangeNumbers(1, 3) returns values 1', () => {
    expect(primeNumbersExample.getRangeNumbers(1, 3)).to.be.eqls([1]);
  }),
  it('primeNumbersExample.getRangeNumbers(4, 7) returns values 1', () => {
    expect(primeNumbersExample.getRangeNumbers(4, 7)).to.be.eqls([1]);
  });
});
