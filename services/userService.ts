import {User} from "../interfaces/user";

export class UserService {

  getAllUsers() : User[] {
     let users = new Array<User>();
      users.push({ name: "Carlos", surname: "Landeras", age:30})
      users.push({ name: "Pedro", surname: "Sanchez", age:40})
      users.push({ name: "Mario", surname: "Santana", age:35})
      return users;
  }
}