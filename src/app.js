console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

var dolarDun = 9.20

{
    var dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing - değişken, fonksiyon
//PascalCasing - sınıf, interface vs.
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++)
{
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("/<ul>")


console.log(konutKredileri)
