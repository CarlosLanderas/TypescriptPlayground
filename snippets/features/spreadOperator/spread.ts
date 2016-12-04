import {ProgrammerService} from "../../services/programmerService";
import {Programmer} from "../../interfaces/programmer";
import {ProgrammingRole} from "../../enums/programmingrole";


let programmersList = new ProgrammerService().getAll();


let newProgrammers : Programmer[] = [
   { age: 40, name: "Peter",surname:"Johnson", speciality: ProgrammingRole.FullStack},
   { age: 40, name: "Bernardo",surname:"Santana", speciality: ProgrammingRole.FrontEnd}
];

programmersList.push(...newProgrammers);

console.log(programmersList);

let newOrderList :  Programmer[] = [];
newOrderList.push(...newProgrammers, ...programmersList);
console.log(newOrderList);
