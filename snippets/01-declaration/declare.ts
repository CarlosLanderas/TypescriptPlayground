
const personName = "Pedro";
//personName = "Juan";

// let can not be redeclared

let age = 44;
//let age = 20;


//var can be redeclared
var a = 44;
var a = 20;


// 1 - var and let scoping
var a = 1;
let b = 2;

if (a == 1){
    var a = 50;
    let b = 20;
    console.log({a,b});
}

console.log({a,b});

// 2 - loops scope with var and let

for (var foo = 0 ; foo < 5; foo ++){}

console.log(foo);

for (let bar = 0 ; bar < 5; bar ++){}

//console.log(bar);