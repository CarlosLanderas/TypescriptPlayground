import sumaAnonima, {sumNumbers} from "./functionsExample";

let suma1  = sumNumbers(23,4,5,6,7);

let suma2 = sumaAnonima(23,23);

console.log({suma1, suma2});


//function assignment

let myFunc: (number1: number, number2 : number) => number  = sumaAnonima;

