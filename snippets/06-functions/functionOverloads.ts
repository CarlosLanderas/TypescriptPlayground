
function overloadedFunction(s: string): number;
function overloadedFunction(n: number): string;
function overloadedFunction(arg: any): any {

    if (typeof (arg) === 'number')
        return arg.toString();
    if (typeof (arg) === 'string')
        return arg.length;
}

console.log(overloadedFunction('Hello World'));
console.log(overloadedFunction(456));

