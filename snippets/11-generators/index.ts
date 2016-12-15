import {programmersGenerator, saluteGenerator} from './generator';
import {ProgrammerService} from '../services/programmerService';
// Generator iterator
let programmerGenerator = programmersGenerator(...new ProgrammerService().getAll());

let iteration;
while(iteration = programmerGenerator.next()){
  console.log(iteration);
  if(iteration.done) {
      break;
  }
}

// Example of pause generator

let saluteGen = saluteGenerator('Peter');
saluteGen.next();
saluteGen.next();