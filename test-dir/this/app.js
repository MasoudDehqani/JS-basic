function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.printInfo = () => {
    console.log("make:", this.make, ", model:", this.model, ", year:", this.year);
  };
}

let car1 = new Car("BMW", "Z4", 2019);

car1.printInfo();
// console.log(car1)


function car2(make, model, year) {
  return {
    make,
    model,
    year,
  
    printInfo: () => {
      console.log("make:", this.make, ", model:", this.model, ", year:", this.year);
    }
  }
}

let car3 = car2("BMW", "Z4", 2019);

car3.printInfo();
// console.log(car3)

console.log(this)


// class Car4 {
//   constructor(make, model, year) {
//     this.make = make
//     this.model = model
//     this.year = year
//   }

//   printInfo = () => {
//     console.log("make:", this.make, ", model:", this.model, ", year:", this.year);
//   }
// }

// let car5 = new Car4("BMW", "Z4", 2020)
// car5.printInfo()


// function person(name, age) {
//   return {
//     name,
//     age,
//     printName: function () {
//       console.log(this.name);
//     },
//   };
// }

// let p1 = person("Joe", 36);
// p1.printName();

// var name = "Lili",
//   age = 17;

// function printPerson(nickName = "Topoli") {
//   console.log(this.name, this.age, nickName);
// }

// let printPersonObject = printPerson.bind(p1);
// printPersonObject();
// printPerson.call(p1, "Kopoli");
// printPerson.apply(p1, ["Lopoo"]);

// p1.printAge = function () {
//   console.log(this.age);
// };

// p1.printAge();

// let p = {
//   age: 30,
//   obj: {
//     age2: 18,
//     printAge: function() {
//       console.log(this.age)
//     }
//   },
//   printThis: function() {
//     console.log(this)
//   }
// }

// console.log(p)
// let p2 = p.printThis()
// console.log(p2)
// p.obj.printAge.call(p)

// function Person(age, age2) {
//   this.age = age
//   this.printAge = () => {
//     console.log(this.age)
//   }
//   this.obj = {
//     age2: age2,
//     printAge2: () => {
//       console.log(this.age)
//     }
//   }
// }

// let p = new Person(22, 38)

// p.printAge()
// p.obj.printAge2()

// let p1 = new Person(45)
// console.log(p1)
// let p2 = Person()


// console.log(p1)
// console.log(p2)

// function person(age) {
//   return {
//     age: age,
//     printAge: () => {
//       console.log(this.age)
//     }
//   }
// }

// let p = person(12)

// p.printAge()
// console.log(p)

// window.age = 10; // <-- notice me?
// function Person() {
//   this.age = 42; // <-- notice me?
//   setTimeout(function () { // <-- Traditional function is executing on the window scope
//     console.log("this.age", this.age); // yields "10" because the function executes on the window scope
//   }, 100);
// }

// var p2 = new Person();
// console.log(p2)