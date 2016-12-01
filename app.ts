import {UserService} from "./services/userService";
import {User,UserAddress} from "./interfaces/user";


let userService  = new UserService();

 console.log(userService.getAllUsers());

