/* eslint-disable new-cap */
interface cipherElements<T> {
  cipherFunction(): T;
  decipherFunction(): T;
}

abstract class cipher implements cipherElements<string> {
  constructor(protected alphabet: string, protected key: string,
    protected word: string) {
  }
  abstract cipherFunction(): string;
  abstract decipherFunction(): string;
}

class cesarCipher extends cipher {
  constructor(alphabet: string, key: string, word: string) {
    super(alphabet, key, word);
  }
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
      console.log(this.word);
      console.log(this.key);
    }
    // Cesar Cipher
    let i: number = 0;
    let j: number = 0;
    let counter: number = 0;
    let keyLength: number = 0;
    let cipherResult: string = ``;
    for (i = 0; i < this.word.length; i++) {
      // To calculates de key
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] !== this.key[i]) {
          counter++;
        } else {
          counter++;
          keyLength = (counter % this.alphabet.length);
        }
      }
      // To search the character to cipher
      for (j = 0; j < this.alphabet.length; j++) {
        if (this.alphabet[j] === this.word[i]) {
          // eslint-disable-next-line max-len
          cipherResult = cipherResult + this.alphabet[((j + (keyLength)) % this.alphabet.length)];
        }
      }
      counter = 0;
    }
    console.log(cipherResult);
    return cipherResult;
  }
  decipherFunction(): string {
    return `0`;
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

const cesarCipherObj =
  new cesarCipher(alphabetIntroduce, keyIntroduce, wordIntroduce);

cesarCipherObj.cipherFunction();

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// CLAVE
// HOLAESTOESUNAPRUEBA
