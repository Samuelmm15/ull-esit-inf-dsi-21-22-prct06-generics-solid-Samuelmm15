/**
 * This interface defines the structure of the
 * different streaming objects.
 */
export interface streamable<T> {
  name: string;
  age: number;
  type: string;
  category: string;
  nameFilter(): T;
  ageFilter(): T;
  categoryFilter(): T;
}
