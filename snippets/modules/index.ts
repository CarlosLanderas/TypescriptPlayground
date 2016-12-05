
// Using moduleExample
import  totalSum ,{number1,number2} from './moduleExample';

//Ambient module
import * as Request from 'request';
let request : Request.HttpRequest;
request.method = "POST";

//Importing ambient moduleExample


console.log({number1, number2});
console.log(`TotalSum: ${totalSum}`);

