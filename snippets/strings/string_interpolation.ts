
import {User} from "../interfaces/user";

let user : User = {
    age : 4,
    name: "Lucas",
    surname : "Perez"
}


console.log(`The user name is ${user.name} and the next year he will be ${user.age + 1} year old`);