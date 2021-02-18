function Car(model, year) {
  this.moodel = model;
  this.year = year;

  this.printModel = () => console.log(this.moodel);
}

Car.prototype.year2 = 2019;
// Car.prototype.printYear = function() {
//     console.log(this.year)
// };

const car1 = new Car("Z4", 2020);
console.log(car1);

const isDeleted = delete car1.year2
console.log(delete car1.year2)
console.log(car1.year2)

let isInstaceOfCar = car1 instanceof Car
console.log(isInstaceOfCar)


function person(name, age) {
  return {
    name,
    age,
    printName: () => console.log(this.name),
  };
}

person.prototype.lastName = "Joeyi";
// person.prototype.printLastName = function() {
//     console.log(this.lastName)
// }

const p1 = person("Joe", 29);
console.log(p1);
console.log(p1.__proto__)




let house2 = {
  floors: 3,
  color: "green",
  printColor: function () {
    console.log(this.color)
  }
};

console.log(house2);
let house3 = Object.create(house2)
house3.area = 150
console.log(house3)
console.log(house3.hasOwnProperty('color'))




class Building {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  static type = 'construction'

  static printInfo() {
    console.log(this.name, this.height);
  }
}

console.log(Building.type)
let house = new Building("house", 14);
console.log(house);





let array1 = [25, 0, 81, 13, 45]

Array.prototype.mySearch = function (fn) {
  let output = []
  for (let i = 0; i < this.length; i++) {
    let result = fn(this[i])
    if (result) output.push(this[i])
  }
  return output
}

let mySearchArr = array1.mySearch(function (value) {
  return value > 25
})
console.log(mySearchArr)


Array.prototype.myMap = function (fn) {
  outputArr = []
  for (n of this) {
    let output = fn(n)
    outputArr.push(output)
  }
  return outputArr
}

let myMapArr = array1.myMap(function (value) {
  return value * 1.5
})

console.log(myMapArr)

console.log(array1)

const {
  floors,
  ...rest
} = house2

console.log(rest)