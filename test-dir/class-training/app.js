// class Shape {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     var name2 = "a";
//     this.printName2 = function () {
//       console.log(name2);
//     };
//   }

//   printInfo() {
//     console.log(this.name, this.age, name2);
//   }

//   name3 = name;

//   printAge3() {
//     console.log(this.name3);
//   }

//   printName = () => console.log(this);

//   printAge = function () {
//     console.log(this.age);
//   };
// }

// let shape1 = new Shape("shape1", 120);
// shape1.printAge3();

function Person(name, age) {
  this.name = name;
  this.age = age;

  let name2 = name;

  function printName2() {
    console.log(name2);
  }

  this.print = function () {
    console.log(this);
  };

  this.print3 = () => console.log(this);

  return { name: "123456", this: { ...this }, print2: () => console.log(this) };
}

let p = new Person("m", 2);
console.log(p);
p.print2();

// console.log(p);

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// p2.printAge();

// console.log(p);
// Person.prototype.printInfo = function () {
//   console.log(this);
// };
// p.printInfo();

// console.log(shape2.name3);

// class Circle extends Shape {
//   constructor(radius) {
//     super("Circle", 68);
//     this.radius = radius;
//   }

//   area() {
//     return this.radius ** 2 * 3.14;
//   }
// }

// let circle1 = new Circle(5);
// circle1.printInfo();
// console.log(circle1);
// let area1 = circle1.area();
// console.log(area1);

// class Rectangle extends Shape {
//   constructor(width, length) {
//     super("Rectangle");
//     this.width = width;
//     this.length = length;
//   }

//   area() {
//     return this.width * this.length;
//   }
// }
