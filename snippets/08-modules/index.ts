
// Using moduleExample
import totalSum, { number1, number2 } from './moduleExample';

// Importing ambient moduleExample
import * as Request from 'request';
let request: Request.HttpRequest = {
    headers: [],
    method: 'POST',
    url: 'localhost'
};


console.log({ number1, number2 });
console.log(`TotalSum: ${totalSum(10, 5)}`);

