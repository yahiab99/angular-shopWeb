export class User{
    firstName: string;
    lastName: string;
    id: string;
    phone: string;
    mail: string;
    userName: string;
    userPassword: string;
    city: string;
    address: string;
    street: string;

    constructor(firstName: string, lastName: string, id: string, phone: string, mail: string, userName: string, userPassword: string, 
        city: string, address: string, street: string){

            this.firstName = firstName;
            this.lastName = lastName;
            this.id = id;
            this.phone = phone;
            this.mail = mail;
            this.userName = userName;
            this.userPassword = userPassword;
            this.city = city;
            this.address = address;
            this.street = street;
    }
}