import {programmersGenerator, saluteGenerator} from './generator';
import {ProgrammerService} from '../services/programmerService';
// Generator iterator
let programmerGenerator = programmersGenerator(...new ProgrammerService().getAll());

let value = programmerGenerator.next();
console.log(value);

while(!value.done){
    value = programmerGenerator.next();
    console.log(value);
}

// Example of pause generator

let saluteGen = saluteGenerator("Peter");
saluteGen.next();
saluteGen.next();