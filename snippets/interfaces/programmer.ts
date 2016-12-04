import {ProgrammingSkills} from "./programmingSkills"

interface Programmer {
    name: string;
    surname: string;
    age: number;
    programmingSkills?: ProgrammingSkills
}



export {Programmer};