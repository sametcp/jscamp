let cart = [
    {id:1, productName:"Telefon", quantity: 3, unitPrice: 4000},
    {id:2, productName:"Bardak", quantity: 2, unitPrice: 30},
    {id:3, productName:"Kalem", quantity: 1, unitPrice: 20},
    {id:4, productName:"Şarj Cihazı", quantity: 2, unitPrice: 100},
    {id:5, productName:"Kitap", quantity: 3, unitPrice: 30},
    {id:6, productName:"Pot", quantity: 5, unitPrice: 150},
]
//SPA => Angular, Vue, React vs. = tek sayfa uygulama. React kütüphane, Angular ve Vue framework. Angular ve Vue'da cart.push bile yapsan ekran yeniden render ediliyor, yenileniyor. React bunu yapmıyor mesela. React'ta state management bu noktada önemli.

console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)  // acc = 0, product da gezen değişkenim


console.log(total)

let quantityOver2 = cart.filter(product => product.quantity > 2 && product.productName == "Pot")

console.log(quantityOver2)


// cart'ı yani referans tip gönderdik. cart'ın değerini değil, cart'ın referansını gönderiyorsun parametreye. referans'a değer yolladığım için otomatik olarak heap'te değer olarak eklenicek.
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat Kılıfı", quantity: 1, unitPrice: 20})
}
// yukarıda herhangi bir referans değişikliği yapmadım. aynı referanstaki cart dizimi çağırdığım için referansa gönderdiğim değeri de alabilirim.
addToCart(cart)

console.log(cart)

let sayi = 10
// referans tipli bir değişken olmadığından değeri değiştiriyor ve işi bitiriyor fonksiyon kullanıldığı scope için. dışarıdan tekrar çağırsam aşağıdaki gibi, referansın değerinde bir değişiklik olmadığından değer yine 10. fonksiyonda number'a 10'u atadım ve alakam kalmıyor. yani değerimi veriyorum referansımı değil. number'ın yeni değeri 11 olabilir scope içinde fakat sayi'nın değeri 10.
function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)

