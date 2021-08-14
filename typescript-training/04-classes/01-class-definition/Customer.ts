class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// let's create an instance
let myCustomer = new Customer("John", "Doe");

/*
// without constructor
myCustomer.firstName = "John";
myCustomer.lastName = "Doe";
*/

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);