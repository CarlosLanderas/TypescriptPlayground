
// Optional parameters

let logUser = (name: string , surname?: string) => {
    console.log(`${name} ${surname}`);
};

logUser('Pedro');


// Default parameters
class UserManager {
    logUser(user: string, pass: string, isPersistent: boolean = false) {
        // Log User
    }
}



