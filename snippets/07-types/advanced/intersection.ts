interface LaptopComputer {
    modelName: string;
    description: string;
    price: number;
}

interface DesktopComputer {
    modelName: string;
    price: number;
    displayInches: number;
}

let computersList = new Array<LaptopComputer & DesktopComputer>();

let computer : LaptopComputer & DesktopComputer = {
    modelName: "Lenovo",
    description : "Lenovo for enterprise",
    price: 1200,
    displayInches: 15.4
}
 
 computersList.push(computer);

 