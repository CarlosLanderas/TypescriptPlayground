import {Programmer} from "../interfaces/programmer";

export class ProgrammerService {

    getAll() : Array<Programmer>{
        
        let programmerList = new Array<Programmer>();
        programmerList.push({age: 45, name: "Luis", surname:"Vazquez"}),
        programmerList.push({age: 23, name: "Marcos", surname:"Sanchez"}),
        programmerList.push({age: 30, name: "Mario", surname:"López"}),
        programmerList.push({age: 34, name: "Laura", surname:"Martín"}),
        programmerList.push({age: 41, name: "María", surname:"Tomás"});
                
        return programmerList;       
    }
}