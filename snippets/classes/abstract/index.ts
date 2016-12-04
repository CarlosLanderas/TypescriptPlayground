import {JavaProgrammer} from './abstract';

export class JProgrammer extends JavaProgrammer {
    codeSomeJava() {
        console.log('Writing some Java!');
    }
}


let jProgrammer = new JProgrammer();
jProgrammer.codeSomeJava();