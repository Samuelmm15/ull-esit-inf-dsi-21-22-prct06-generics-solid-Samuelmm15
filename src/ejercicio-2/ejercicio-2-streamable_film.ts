/**
 * This interface defines the structure of
 * the films objects.
 */
export interface streamable_film<T> {
  addFilm(filmAdd: T): void;
  production: string;
}
