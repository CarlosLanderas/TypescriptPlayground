import {SoftwareProgrammer} from './abstract';

export class JavaProgrammer extends SoftwareProgrammer {
    doSomeCode() {
        console.log('Writing some Java!');
    }
}

export class CSharpProgramer extends SoftwareProgrammer {
    doSomeCode() {
        console.log('Writing some C#!');
    }
}



new JavaProgrammer().doSomeCode();
new CSharpProgramer().doSomeCode();