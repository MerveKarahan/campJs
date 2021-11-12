function addToCart(quantity, productName = "elma") {
  console.log("Sepete Eklendi : ürün : " + productName + "adet : " + quantity);
}

//addToCart("Elma");
addToCart(10);
//addToCart("Elma");
//bir function'ı değişkene atayabiliriz.
let sayHello = () => {
  console.log("Hello World");
};
//bu çağırmak için yazılır.yazılmazsa console'a bir şey yazmaz.
sayHello();

//Klasik bir fonksiyon da bir değişkene atanabilir.
let sayMetaverse = function () {
  console.log("Hello Metaverse");
};
sayMetaverse();

function addToCart2(productName, unitPrice, quantity) {}
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  //bana bir şey yolla ben ona product diycem demek.
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Ürün : " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);
//özellikle sayısal veriler değer tiptir. veriobjeyse referans tiptir.
let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCart4(products) {
  //buraya ne yazarsak yazalım bi önemi yok.console kısmındaki verdiğimiz değer önemli.
  console.log(products);
}
let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);

function add(bisey, ...numbers) {
  //rest operatörü diyoruz. Rest operatörü dışında bir parametre varhata almamak için ... kısım sonra yazılır.
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(bisey);
}
add(20, 30);
//add(20, 30, 40);
//add(20, 30, 40, 50);
let numbers = [30, 10, 500, 600, 120];
console.log(Math.max(...numbers)); //... numbersı ayır demek. Array içerisinde olduğu için ayrılması gerekiyor sayıların.
//let [icAnadolu, marmara] = ["İç Anadolu", "Marmara", "Karadaniz"];
//console.log(icAnadolu);

let[icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
  {name:"İç Anadolu", population:"20M"},
  {name:"Marmara", population:"30M"},
  {name:"Karadeniz", population:"10M"},
  [
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"],
  ]

]
//console.log(icAnadolu.name)
//console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
 = { productName: "Elma", unitPrice: 10, quantity: 5 })
console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)
