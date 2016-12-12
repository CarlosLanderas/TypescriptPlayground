export interface Module2Interface{}

let anonymousFunction = (numbers : Array<number>): void =>  {
    console.log([...numbers]);
}

var Module2Id : string = "Module2Id";

export {anonymousFunction, Module2Id}