
function sumNumbers(...params : number[]){
    return params.reduce( ( total, value) => {
        total += value;
        return total;
    });
}


const saluteFunction = (name:string) : (salute:string) => string => {
    return (salute:string) => `${name} ${salute}!`;
}

const anonymousSum = (number1: number, number2: number) : number  =>  {
     return sumNumbers(number1, number2);
};

export {sumNumbers, saluteFunction};
export default anonymousSum;
