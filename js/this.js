//1. method -> obj
//2. function -> global,

//keyword 'this'

//example 1. method -> obj
// const video = {
//   title: "a",
//   play() {
//     console.log(this); //'this' ini reference dari dirinya sendiri
//   },
// };

// video.stop = function () {
//   console.log(this); //'this' ini reference dari dirinya sendi
// };

// video.stop();

//example 2. function -> global
// const video = {
//   title: "a",
//   play() {
//     console.log(this); //'this' ini reference dari dirinya sendiri
//   },
// };

// video.stop = function () {
//   console.log(this); //'this' ini reference dari dirinya sendi
// };

// video.stop();
// console.log(white);//throws referenceError
// class Car {
//   static start() {
//     console.log("starter");
//   }
// }

// function status() {
//   Car.start();
// }

// console.log("hello word");

// the call() method
// function printName(first, last) {
//   console.log(`${first}, ${last}`);
//   console.log(this);
// }

// printName.call(
//   {
//     model: "samsung",
//     color: "black",
//   },
//   "hello",
//   "world"
// );
// let cart = [];
// function setApp() {
//   console.log("setApp");
//   cart = new Storage();
//   console.log(Storage.x);
// }

//===========================================
//learn the class basic
// class Rectangle {
//   //this is class
//   constructor(_width, _height, _color) {
//     console.log("Hello i'm is constructor");

//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   printDescription() {
//     console.log(
//       `im is rectangle ${this.width} x ${this.height} dan color ${this.color}`
//     );
//   }
// }

// //this object
// let myRectangle = new Rectangle(1, 2, "blue");
// console.log(myRectangle.getArea());
// console.log(myRectangle.printDescription());

//===========================================

//Learn the class : Setter dan Getter

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestOfarea = 0;
//   }

//   get area() {
//     // getter
//     this.numOfRequestOfarea++;
//     return this.width * this.height;
//   }

//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square();

// square1.area = 4;
// console.log(square1.area);
// console.log(square1.area);

// console.log(square1.numOfRequestOfarea);
// document.addEventListener("DOMContentLoaded", async () => {
//   setApp();
// });
var cart = [
  {
    id: "4",
    title: "Dos Kombinasi",
    price: "28000",
    image: "dos_kombinasi_200px.jpg",
    amount: 1,
  },
  {
    id: "7",
    title: "Mika Jumbo",
    price: "26000",
    image: "mika_jumbo_200px.jpg",
    amount: 1,
  },
];

const uang = [10000, 24500, 39000000, 45000000, 500000000];
const data = [1, 2, 3, 4, 5];
var total = 0;
const filter2 = cart.filter(function (item) {
  // console.log(item.id);
  // console.log("parseINt", parseInt(item.id));
  return item.id !== "4";
});

const filter = uang.filter((item, index) => index + 1 !== 2);
// .map((item) => item);

const map = uang.map((item, index) => index + 1 !== 1);
const find = data.find((item) => item !== 4);
const reduce = uang.reduce((total, item) => (total += item));
// const filter = data.filter(function (data) {
//   return data !== 4;
// });

console.log("filter", filter);
console.log("map", map);
// console.log("filter cart", filter2);
// console.log("map", map);
// console.log("find", find);
// console.log("reduce", reduce);
