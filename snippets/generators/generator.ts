export function* numberGenerator(max: number) {
    for(let i = 0 ; i < max; i++) {
        yield i;
    }
}

export function* saluteGenerator(name:string){
    console.log("I'm going to pause, but I will salute you next execution :D");
    yield;
    console.log(`Hello ${name}!!`);
}