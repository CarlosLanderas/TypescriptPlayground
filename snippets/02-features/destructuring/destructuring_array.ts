let programmingLanguages: string[] = ['c#', 'java', 'python'];

let first: string = programmingLanguages[0];
let second: string = programmingLanguages[1];

// Destructuring the array

let [csharp, java, python] = programmingLanguages;

console.log(java);
console.log(python);


//parse array from function.


function getProgrammingLanguages() {
    return programmingLanguages;
}



let [lang1, lang2, lang3] = getProgrammingLanguages();
console.log({lang1, lang2, lang3});

//ignoring values

let [l1,,l2] = getProgrammingLanguages();
console.log({l1,l2});