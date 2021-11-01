function addToCart(quantity, productName="Elma") {
    console.log("Sepete Eklendi : Ürün = " + productName + ", Adet = " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function (params) {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName : "Elma", unitPrice : 10, quantity : 5}


function addtoCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}


addtoCart3(product1)

let product2 = {productName : "Elma", unitPrice : 10, quantity : 5} //102'nin productName'i elma demek gerek. 01:28:00
let product3 = {productName : "Elma", unitPrice : 10, quantity : 5}
product2 = product3  // = product2'nin referans adresi = product3'ün referans adresi
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName : "Elma", unitPrice : 10, quantity : 5},
    {productName : "Armut", unitPrice : 10, quantity : 5},
    {productName : "Karpuz", unitPrice : 10, quantity : 5}
]

addToCart4(products)  //addToCart4 fonksiyonuna (parametresine) products'ın referansını gönderiyorum.

function add(bisey, ...numbers) {  //rest operatörü (parametrede bir değişkenin önüne 3 nokta yazdım 02:04:00. array yapıyor. rest'i fonksiyonun her zaman sağında bırak. farklı değişken varsa parametrede yani, rest'i olan değişkenim sağda olsun.)
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}


add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers))  // ayrı ayrı sayı vermem gerek fonksiyonun içine. bunun için dizinin elemanlarını alıp ayrı ayrı tutmam gerek.

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population : "20M"},
    {name: "Marmara", population : "30M"},
    {name: "Karadeniz", population : "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName : "Elma", unitPrice : 10, quantity : 5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)