import {ProgrammingSkills} from './programmingSkills';
import {ProgrammingRole} from '../05-enums/programmingRole';

export interface Programmer {
    name: string;
    surname: string;
    age: number;
    speciality?: ProgrammingRole;
    programmingSkills?: ProgrammingSkills;
}

