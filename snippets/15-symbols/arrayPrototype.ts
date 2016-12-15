
interface Array<T> {
    first();    
}

const arrayFirst = Symbol('fist');

let firstFunction = function(){ return this[0];};

 Object.defineProperty(Array.prototype, arrayFirst,{
    value: firstFunction,
    writable: true,
    configurable: true,
    enumerable: false
  });


export default arrayFirst;