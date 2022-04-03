/* eslint-disable new-cap */
import {cesarCipher} from './ejercicio-3-cesarCipher';

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
