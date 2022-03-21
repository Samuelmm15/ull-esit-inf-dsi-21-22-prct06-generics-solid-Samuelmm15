/* eslint-disable new-cap */
/**
 * This interface defines the structure of
 * the cipher or decipher objects.
 */
interface cipherElements<T> {
  cipherFunction(): T;
  decipherFunction(cipherWord: T): T;
}

/**
 * This class defines the structure of the
 * cesarCipher.
 */
abstract class cipher implements cipherElements<string> {
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

/**
 * This class implements the algorithm called Cesar cipher algorithm.
 */
class cesarCipher extends cipher {
  /**
   * This is the constructor of the class.
   * @param alphabet Consists in the alphabet to use.
   * @param key Consists in the cipher key.
   * @param word Consists in the word to cipher.
   */
  constructor(alphabet: string, key: string, word: string) {
    super(alphabet, key, word);
  }
  /**
   * This is the cipher function.
   * @returns The cipher word.
   */
  cipherFunction(): string {
    // To equal the key to the word
    if (this.key.length <= this.word.length) {
      const auxiliaryKey: string = this.key;
      let i: number = 0;
      let j: number = 0;
      const finalI: number = this.word.length - this.key.length;
      const finalJ: number = this.key.length;
      for (i = 0; i < finalI; i++) {
        if (j === finalJ) {
          j = 0;
        }
        this.key = this.key + auxiliaryKey[j];
        j++;
      }
      console.log();
      console.log(`Palabra a cifrar: `);
      console.log(this.word);
      console.log(`Clave de cifrado: `);
      console.log(this.key);
    }
    // Cesar Cipher
    let i: number = 0;
    let j: number = 0;
    let cipherLength: number = 0;
    let keyLength: number = 0;
    let cipherResult: string = ``;
    let decipher: number = 0;
    for (i = 0; i < this.word.length; i++) {
      // To calculates de key
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] === this.word[i]) {
          cipherLength = j;
        }
        if (this.alphabet[j] === this.key[i]) {
          keyLength = j;
        }
      }
      decipher = ((cipherLength + keyLength) % (this.alphabet.length - 1));
      cipherResult = cipherResult + this.alphabet[decipher];
    }
    console.log(`Palabra cifrada: `);
    console.log(cipherResult);
    return cipherResult;
  }
  /**
   * This is the decipher function.
   * @param cipherWord Consists in the cipher word to decipher.
   * @returns The decipher word.
   */
  decipherFunction(cipherWord: string): string {
    // To equal the key to the cipher word
    if (this.key.length <= cipherWord.length) {
      const auxiliaryKey: string = this.key;
      let i: number = 0;
      let j: number = 0;
      const finalI: number = cipherWord.length - this.key.length;
      const finalJ: number = this.key.length;
      for (i = 0; i < finalI; i++) {
        if (j === finalJ) {
          j = 0;
        }
        this.key = this.key + auxiliaryKey[j];
        j++;
      }
      console.log();
      console.log(`Palabra cifrada: `);
      console.log(cipherWord);
      console.log(`Clave de cifrado: `);
      console.log(this.key);
    }
    // Cesar decipher
    let i: number = 0;
    let j: number = 0;
    let cipherLength: number = 0;
    let keyLength: number = 0;
    let decipherResult: string = ``;
    let decipher: number = 0;
    for (i = 0; i < cipherWord.length; i++) {
      // To calculates de key
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] === cipherWord[i]) {
          cipherLength = j;
        }
        if (this.alphabet[j] === this.key[i]) {
          keyLength = j;
        }
      }
      decipher = cipherLength - keyLength;
      if (decipher < 0) {
        decipher = decipher + (this.alphabet.length - 1);
      }
      decipherResult = decipherResult + this.alphabet[decipher];
    }
    console.log(`Palabra descifrada: `);
    console.log(decipherResult);
    return decipherResult;
  }
}

console.log();
const entry = require('prompt-sync')({sigit: true});
let alphabetIntroduce: string = ``;
alphabetIntroduce = entry(`Introduzca el alfabeto para cifrar: `);
let keyIntroduce: string = ``;
keyIntroduce = entry(`Introduzca la clave de cifrado: `);
let wordIntroduce: string = ``;
wordIntroduce = entry(`Introduzca la palabra que desea cifrar: `);

export const cesarCipherObj =
  new cesarCipher(alphabetIntroduce, keyIntroduce, wordIntroduce);

export const example: string = cesarCipherObj.cipherFunction();
cesarCipherObj.decipherFunction(example);

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// CLAVE
// HOLAESTOESUNAPRUEBA
