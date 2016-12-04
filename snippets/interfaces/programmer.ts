import {ProgrammingSkills} from './programmingSkills';
import {ProgrammingRole} from '../enums/programmingRole';

interface Programmer {
    name: string;
    surname: string;
    age: number;
    speciality?: ProgrammingRole;
    programmingSkills?: ProgrammingSkills;
}

export {Programmer};