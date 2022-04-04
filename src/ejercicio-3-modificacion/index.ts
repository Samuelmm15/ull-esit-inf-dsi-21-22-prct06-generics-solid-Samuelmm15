import {Solve} from './solve';
import {BubleSort} from './bubble-sort';
import {MergeSort} from './merge-sort';

const solver = new Solve([5, 4, 9, 1, 3, 6], new BubleSort());
solver.logic();

solver.setStrategy(new MergeSort());
solver.logic();
