import { UserService } from './snippets/services/userService';
import { User, UserAddress } from './snippets/interfaces/user';
import {Programmer} from './snippets/classes/static';


let userService = new UserService();

console.log(Programmer.main());
console.log(userService.getAllUsers());