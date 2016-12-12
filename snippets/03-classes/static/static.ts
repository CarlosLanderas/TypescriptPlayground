import { ProgrammingSkills } from '../../03-interfaces/programmingSkills';

class Programmer implements ProgrammingSkills {

    public name: string;
    public mainProgramLanguage: string;
    public skills: Array<string>;

    public static sayHello(): void {
        console.log('Hello I\'m a programmer');
    }
}
export { Programmer };

Programmer.sayHello();