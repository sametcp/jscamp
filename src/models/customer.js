import User from "./user.js"

export default class Customer extends User{  // = Customer, User'ın referansını tutabilir. Customer = User
    constructor(id, firstName, lastName, city, age, creditCardNumber){
        super(id, firstName, lastName, city, age) // bana gönderdiğin 4 parametreyi aslında super yani inherit ettiği yapıya gönder dedim. burda super() = User'a karşılık geliyor. Bu parametreler user class'ında işlenicek (super'in constructor'unu çalıştır dedik kısaca. orada set etmiş oluruz)
        this.creditCardNumber = creditCardNumber
    }
}