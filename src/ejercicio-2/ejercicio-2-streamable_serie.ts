/**
 * This interface defines the structure of
 * the series objetcs.
 */
export interface streamable_serie<T> {
  addSeries(serieAdd: T): void;
  seasons: number;
}
