import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    // export, dışarıdan import edilebileceği anlamına gelir. default ise bir yerde UserService'i import ettiğimde default olarak bunu import et demek.

    constructor(loggerService){
        //this.users = [] //this.users = getCustomersFromDb()
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    
    //forof => user takma isim ile users'ı gez
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user));

            }
        }
    }

    //Özellikle React'ta formik-yup kütüphanesi
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ")  // burda array oluşturup ayrı ayrı içine de atabilirdik. split bir array döndürür (split fonk. üstüne gelirsen yazar zaten : 'dan sonraki dönüş tipini anlatır. string array. boşluğa göre parçaladık. boşluğun dışında kalanı array'in içine eleman olarak atayacak) user.id = user["id"]
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))  // ` ` arasındaki ${} içerisinde js kodu yazabilirim. 01:21:00
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number!`, user))
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))
            }
        }
        return hasErrors
    }

    add(user){
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        //return this.users
    }

    getById(id){
        //return this.users.find(user => user.id === id)
    }
}