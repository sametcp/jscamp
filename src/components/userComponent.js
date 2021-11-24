import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"

console.log("User component yüklendi!")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
let user1 = new User(1,"Samet","Şimşek","Samsun")
let user2 = new User(2,"Berk","Şimşek","Samsun")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




let customer = {id:1, firstName:"Samet"}
//prototyping - sonradan değer ekleyebilme işlemi
customer.lastName = "Şimşek"

console.log(customer.lastName)

console.log("-------------------------")
userService.load() // React'taki componentDidMount gibi 45:00 - Angular'daki onInit - Vue mounted
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)