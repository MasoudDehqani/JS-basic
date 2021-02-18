
// 1
// One way of creating an object
let str1 = new String('string 1')
let object1 = {
    name: 'John',
    age: 27,
    'exam score': 17,
    'last name': 'John Pour',
    [str1]: 'string as a value',

    printInfo: function() {
        console.log(`Name: ${this.name} , Age: ${this.age}`)
    }
}

object1.printInfo()
console.log(object1["age"])
console.log(object1['exam score'])
console.log(object1['last name'])
console.log(object1)

// 2
// Another way of creating objects in JavaScript
let object2 = new Object()

object2.name = 'Joel'
object2.age = '35'
object2['exam score'] = 14
object2.printInfo = function() {
    console.log(`Name: ${this.name} , Age: ${this.age}, Exam Score: ${this['exam score']}`)
}

console.log(object2)
object2.printInfo()

// 3
// Creating an object with constructor function
function Object3(name, age) {
    this.name = name
    this.age = age

    this.printInfo = function() {
        console.log(`Name: ${name} , Age: ${this.age}`)
    }
}

let object3 = new Object3('Joe', 18)
object3.name = 'Joe2' // Initial value of name won't be replaced by 'Joe2' when using printInfo
object3.age = 23 // But the value of age will be changed from 180 to 23
object3.printInfo()
let str = 'String'
object3[str] = 'String by brackets'
let num = 9
object3[num] = true
let newObj = new Object()
newObj.name = 'Michael'
object3[newObj] = 'obj'
object3['obj1'] = newObj

console.log(object3)

// 4
// Factory functioin is another way of creating objects
function object4(name, age, printInfo) {
    return {
        name,
        age,
        printInfo
    }
}

let object5 = object4('Jack', 34, () => {
    console.log(`Name: ${object5.name} , Age: ${object5.age}`)
})
object5.printInfo()

// Equality of objects
// Objects are of reference types
let x = {
    name: 'Joel'
}

let y = {
    name: 'Joel'
}

console.log(x === y) // got false

y = x // Now thay are both referencing to the same place at memory
console.log(x === y) // got true
y.name = "Joel2"
console.log(x.name) // Any changes to any of them will be reflected to another one too
console.log(x, y)
x.name = 'Joel3'
console.log(x.name) // Any changes to any of them will be reflected to another one too
console.log(x, y)

Object.defineProperty(y, 'name', {configurable: false})
const isDeleted = delete y.name
console.log(isDeleted)