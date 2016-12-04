export function reverseArray<T>(array: Array<T>): Array<T> {
    return array.reverse();
}

let names: string[] = ['Andres', 'Santiago', 'Stephan'];
let reverseNames = reverseArray<string>(names);
console.log(reverseNames);

let numbers: number[] = [10, 80, 300, 1200];
let reverseNumbers = reverseArray<number>(numbers);
console.log(reverseNumbers);