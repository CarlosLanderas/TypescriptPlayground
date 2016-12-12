import {Programmer} from '../../03-interfaces/programmer';
import { ProgrammingSkills } from '../../03-interfaces/ProgrammingSkills';


let programmerSkills: ProgrammingSkills = {
    mainProgramLanguage: 'C#',
    skills : [
        'Javascript',
        'Python'
    ]
};

let programmer: Programmer = {
    age : 30,
    name : 'Lucas',
    surname: 'Vazquez',
    programmingSkills: programmerSkills
};

// Common

let age = programmer.age;
let mainLanguage = programmer.programmingSkills.mainProgramLanguage;

// Object destructuring

// Same property name
let {name, surname } = programmer;

// Different property name

let {age: programmerAge} = programmer;

let {mainProgramLanguage} = programmer.programmingSkills;

console.log(name);
console.log(surname);
console.log(programmerAge);