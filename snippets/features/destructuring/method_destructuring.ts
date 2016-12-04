import {ProgrammerService} from "../../services/programmerService";
import {Programmer} from "../../interfaces/programmer";


//Array method destructuring
function LogProgrammerList([programmer1, programmer2, ...restOfProgrammers] : Programmer[]){
    PrintProgrammerInfo(programmer1);
    PrintProgrammerInfo(programmer2);
    console.log(restOfProgrammers);
}

//Object method destructuring
function PrintProgrammerInfo({name,age, surname: apellido}: Programmer){
    console.log(` Programmer name is ${name} ${apellido} and he/she is ${age}`);
}

let programmers = new ProgrammerService().getAll();
LogProgrammerList(programmers);