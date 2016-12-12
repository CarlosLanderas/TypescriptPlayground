import {Programmer} from '../03-interfaces/programmer';

export function* programmersGenerator(...programmers : Programmer[]) {
    for(let i = 0 ; i < programmers.length; i++) {
        yield programmers[i];
    }
}

export function* saluteGenerator(name:string){
    console.log("I'm going to pause, but I will salute you next execution :D");
    yield;
    console.log(`Hello ${name}!!`);
}