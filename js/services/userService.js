"use strict";
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getAllUsers = function () {
        var users = new Array();
        users.push({ name: "Carlos", surname: "Landeras", age: 30 });
        users.push({ name: "Pedro", surname: "Sanchez", age: 40 });
        users.push({ name: "Mario", surname: "Santana", age: 35 });
        return users;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map