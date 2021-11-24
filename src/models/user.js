export default class User{
    constructor(id, firstName, lastName, city, age){
        //prototype
        // constructor = yapıcı blok. User class'ından bir nesne newlendiği an bu metot çalışır.
        this.id = id
        this.firstName = firstName  // this, burda User'ı temsil ediyor. User nesnesine firstName isminde bir prototype yazıyoruz. User'a firstName atadığım bu değişkenim de parametreden gelen firstName değerimi alıyor. User class'ının birden çok sahip olduğu özellikten (fonk vs. yok ama özellik var) birisi
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}