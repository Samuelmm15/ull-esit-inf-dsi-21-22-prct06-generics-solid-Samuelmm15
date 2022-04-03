/**
 * This interface defines the structure of
 * the cipher or decipher objects.
 */
export interface cipherElements<T> {
  cipherFunction(): T;
  decipherFunction(cipherWord: T): T;
}
