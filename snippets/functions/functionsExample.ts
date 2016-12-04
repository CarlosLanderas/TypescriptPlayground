function sumNumbers(... params: number[]) {
    
    let totalSum = 0;
   
    for (let i = 0; i < params.length; i++) {     
         totalSum += params[i];
     }
    return totalSum;
}


const anonymousSum = (number1: number, number2: number) : number  =>  {
     return sumNumbers(number1, number2);
};

export {sumNumbers};
export default anonymousSum;
