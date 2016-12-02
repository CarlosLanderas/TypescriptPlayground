import { ProgrammingSkills } from '../interfaces/programmingSkills';

class Programmer implements ProgrammingSkills {

    public name: string;
    public mainProgramLanguage: string;
    public skills: Array<string>;

    public static main(): void {
        console.log('Hello I\'m a programmer');
    }
}
export { Programmer };