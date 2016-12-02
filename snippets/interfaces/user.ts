interface User {
    name: string;
    surname: string;
    age: number;

}

interface UserAddress {
    address: string;
    zipCode: number;
    country: string;
    province: string;
}


export {User, UserAddress};