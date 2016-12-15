import {ProgrammerService} from '../../services/programmerService';

let programmersList = new ProgrammerService().getAll();

for (let {name: n, age : edad} of programmersList) {
    console.log(`name: ${n} | edad: ${edad}`);
}