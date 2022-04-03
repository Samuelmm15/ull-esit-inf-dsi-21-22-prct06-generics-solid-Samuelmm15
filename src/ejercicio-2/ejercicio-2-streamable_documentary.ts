/**
 * This interface defines the structure of
 * the documentary objects.
 */
export interface streamable_documentary<T> {
  addDocumentary(documentaryAdd: T): void;
  company: string;
}
