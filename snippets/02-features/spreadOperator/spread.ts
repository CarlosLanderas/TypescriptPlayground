import {ProgrammerService} from '../../services/programmerService';
import {Programmer} from '../../03-interfaces/programmer';
import {ProgrammingRole} from '../../05-enums/programmingrole';


let programmersList = new ProgrammerService().getAll();


let newProgrammers: Programmer[] = [
   { age: 40, name: 'Peter', surname: 'Johnson', speciality: ProgrammingRole.FullStack},
   { age: 40, name: 'Bernardo', surname: 'Santana', speciality: ProgrammingRole.FrontEnd}
];

programmersList.push(...newProgrammers);

console.log(programmersList);

let newOrderList:  Programmer[] = [];
newOrderList.push(...newProgrammers, ...programmersList);
console.log(newOrderList);


//Inmutability
let firstProgrammer = newProgrammers[0];
firstProgrammer.age = 999;

let modifiedProgrammers = [
    ...newProgrammers.filter (pr => pr.name !== firstProgrammer.name), Object.assign({}, firstProgrammer)
];

console.log(modifiedProgrammers);



