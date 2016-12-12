import TotalSum from "./moduleExample";

//Lazy loading
export function loadTotalSum() {
     let sumFunction: typeof TotalSum = require('./moduleExample').default;          
     let result = sumFunction(5,6);
     console.log(result);     
}

//Lazy invocation
loadTotalSum();
