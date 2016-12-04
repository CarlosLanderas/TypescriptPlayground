import {Programmer} from '../interfaces/programmer';
import {ProgrammingRole} from '../enums/programmingRole';

export class ProgrammerService {

    getAll(): Array<Programmer> {
      
        let programmerList = new Array<Programmer>();
        
        programmerList.push({age: 45, name: 'Luis', surname: 'Vazquez', speciality: ProgrammingRole.Backend});
        programmerList.push({age: 23, name: 'Marcos', surname: 'Sanchez', speciality : ProgrammingRole.FullStack});
        programmerList.push({age: 30, name: 'Mario', surname: 'López', speciality : ProgrammingRole.FrontEnd});
        programmerList.push({age: 34, name: 'Laura', surname: 'Martín', speciality : ProgrammingRole.FullStack});
        programmerList.push({age: 41, name: 'María', surname: 'Tomás', speciality : ProgrammingRole.FrontEnd});
                
        return programmerList;       
    }
}