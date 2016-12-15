
import arrayFirst from './arrayPrototype';

let arrayNumber = [4,5,6,7,8];
console.log(arrayNumber[arrayFirst]());


console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertySymbols(Array.prototype));