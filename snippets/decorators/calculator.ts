import { log } from './methodDecorators/logDecorator';


export class Calculator {
    @log
    sumNumbers(num1: number, num2: number) {
        let sum = num1 + num2;
        console.log(`Result is ${sum}`);
    }
}

let calculator = new Calculator();
calculator.sumNumbers(4, 6);
