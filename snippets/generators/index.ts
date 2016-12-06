import {numberGenerator, saluteGenerator} from './generator';

// Generator iterator
let numberGen = numberGenerator(6);

let value = numberGen.next();
console.log(value);

while(!value.done){
    value = numberGen.next();
    console.log(value);
}

// Example of pause generator
let saluteGen = saluteGenerator("Peter");
saluteGen.next();
saluteGen.next();