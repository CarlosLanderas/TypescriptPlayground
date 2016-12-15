
//accessing symbols with getOwnPropertySymbols
let person = {
    name: "Luke",
    surname: "Skywalker",
    [Symbol("sayHi")] : () => { console.log('Hello from symbol')}
}

console.log(Object.getOwnPropertyNames(person));

Object.getOwnPropertySymbols(person).forEach( s => {
       console.log(s);
       let symbol : any = person[s];
       symbol();
});

//or holding a reference
let ageSymbol = Symbol('age');
let person2 = {
    name: 'Patricia',
    [ageSymbol] :30
};

console.log(person2[ageSymbol]); //prints 30






