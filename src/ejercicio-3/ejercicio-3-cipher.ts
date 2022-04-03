import {cipherElements} from './ejercicio-3-cipherElements';
/**
 * This class defines the structure of the
 * cesarCipher.
 */
export abstract class cipher implements cipherElements<string> {
  /**
     * This is the constructor of the class.
     * @param alphabet Consists in the alphabet to use.
     * @param key Consists in the cipher key.
     * @param word Consists in the word to cipher.
     */
  constructor(protected alphabet: string, protected key: string,
      protected word: string) {
  }
    /**
     * This function ciphers the word.
     */
    abstract cipherFunction(): string;
    /**
     * This function desciphers the word.
     * @param cipherWord Consists in the cipher word to decipher.
     */
    abstract decipherFunction(cipherWord: string): string;
}
