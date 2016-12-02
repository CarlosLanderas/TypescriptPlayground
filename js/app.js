"use strict";
var userService_1 = require('./snippets/services/userService');
var static_1 = require('./snippets/classes/static');
var userService = new userService_1.UserService();
console.log(static_1.Programmer.main());
console.log(userService.getAllUsers());
//# sourceMappingURL=app.js.map