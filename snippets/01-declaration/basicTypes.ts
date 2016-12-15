
// boolean
let completed : boolean = false;

// numbers
let hex: number = 0xf00d;
let octal: number = 0o744;

// string
let otherCity : string = 'Cadiz';

// inference
let num = 41;
let city = 'Madrid';

// Array

let numberArray : number[] = [4,3,4,5,10];
let stringArray : string[] = ['a', 'b', 'c', 'd'];

// Tuple

let tuple1 : [string,number] = ['id', 5];
let tuple2 : [number,number] = [10, 5];

// Any

let unknownVar : any = 5;
unknownVar = "I'm a string now!";
unknownVar = true; // I am a boolean now :d

// void

function iDontReturnAnything(): void {
    // 
}

// never
function fail(): never{
    while(true){}
}

// type assertions

let customName : any = "pepe";
let nameLength = (customName as string).length;
 









