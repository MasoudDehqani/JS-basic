// let obj = {
//   name: "Joe",
//   scores: {
//     math: 15,
//     en: 16,
//   },
//   age: 18,
// };

// ({ name, scores: {math} } = { name: "Joe", scores: { math: 15, en: 16}, age: 18 })

// console.log(name, math)

// [a, b] = [10, 20];
// console.log(a, b);

// let {name, ...obj3} = obj
// console.log(obj3)

// let obj2 = {
//   name: "Michael",
//   scores: {
//     math: 20,
//     en: 14,
//   },
//   age: 19,
// };

// Object.defineProperty(obj2, 'nickname', {value: 'abc'})
// console.log(obj2)
// console.log(Object.keys(obj2))

// let obj4 = { ...obj, ...obj2, phone: "123456" };
// console.log(obj4);

// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr, ...arr2, 6];
// console.log(arr3);

// console.log(Array.prototype === arr3.__proto__.constructor.prototype);
// console.log(arr3.__proto__ === arr3.__proto__.constructor.prototype);
// console.log(Array.prototype === arr3.__proto__);

// console.log(obj.__proto__ === Object.prototype);

// console.log(arr3.__proto__.__proto__ === Object.prototype);
// console.log(arr3.__proto__.constructor.prototype.__proto__ === Object.prototype);

// console.log(arr3.__proto__.constructor === Array);

// console.log(arr3.__proto__)

// console.log(Object.getPrototypeOf(arr3))

// let n = new Number(0)
// console.log(typeof n)
// console.log(!!n)

// let n2 = 0
// console.log(typeof n2)
// console.log(!!n2)

// let bool = new Boolean(false)
// console.log(typeof bool)
// console.log(!!bool)

// let array = [1, 2, 3]
// array[10] = 11
// console.log(array)

// let er = new Error()

// try {
//   throw new Error()
// }
// catch(e) {
//   console.log(e)
// }
// finally {
//   console.log('123')
// }

// let id = setInterval(() => console.log('Hi'), 1000);
// console.log(id)

// setTimeout(() => clearInterval(1), 10000)

// let person = { name: 'Lydia', obj: {name2: 'Topoli'} };
// const members = {...person, obj: {...person.obj}};
// person.name = "123"
// person.obj.name2 = '456789'
// console.log(members)

// let person = { name: 'Lydia' };
// const members = {person};
// members.person.name = 'abc'

// console.log(person);
// console.log(members)

// let person2 = person
// person.name = 'Topoli'
// let pArray2 = pArray
// pArray = null
// console.log(person2)
// console.log(pArray2)

// let obj5 = {
//   name: 'abc',
//   age: 18
// }

// for (let item in obj5) {
//   console.log(obj5[item])
// }

// console.log(obj5['name'])

// let ar = [1, 2, 3]
// let ar2 = ar.map( num => {
//   return num * 2
// })

// console.log(ar2);
// console.log('2' * 2);

// (() => {
//   q = 0
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);
// console.log(q);

// (() => {
//   z = 0
//   let w = 1
//   var q = 2
// })()

// console.log(z)
// console.log(typeof w)

// const settings = {
//   username: 'lydiahallie',
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ['level', 'health', 'age', 19]);
// console.log(data);

// function a() {
//   console.log(this)
//   let b = () => {
//     console.log(this)
//   }
//   return b
// }

// let b2 = a()
// console.log(b2)

// const keys = ["name", "age"];
// const values = ["Lydia", 22];
// let obj = {
//   name: "abc",
//   age: 22,
// };

// let arr = [1, 2, 3];

// let obj2 = { ...arr };
// console.log(obj2);

// Object.entries(obj)
// console.log(Object.values(obj))

// console.log(Object['fromEntries'])

// keys.map((_, i) => {
//   return [keys[i], values[i]];
// });

// let func = fromEntries;
// Object.fromEntries(
//   keys.map((_, i) => {
//     return [keys[i], values[i]];
//   })
// );

// console.log(
//   Object[func](
//     keys.map((_, i) => {
//       return [keys[i], values[i]];
//     })
//   )
// );

// const keys = ["name", "age"]
// const values = ["Lydia", 22]

// const method = 'fromEntries'
// Object[method](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })) // { name: "Lydia", age: 22 }

// console.log(Object[method](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })))

// function func(...args) {
//     console.log(arguments)
// }

// func(1, 2, 3)

// function calcAge() {
//   let now = 2021;
//   let birthyear = 1988;
//   let age = now - birthyear;
//   console.log(age);
//   console.log(fName);
//   return age;
// }

// let fName = "abc";
// var lName = "cdb";
// calcAge();

// name2 = "abc";
// console.log(window);

// var theThing = document.querySelector("#thing");
// var container = document.querySelector("#contentContainer");


// container.addEventListener("click", function (event) {
//   var xPosition =
//     event.clientX -
//     container.getBoundingClientRect().left -
//     theThing.clientWidth / 2;
//   var yPosition =
//     event.clientY -
//     container.getBoundingClientRect().top -
//     theThing.clientHeight / 2;
//   // in case of a wide border, the boarder-width needs to be considered in the formula above
//   theThing.style.left = xPosition + "px";
//   theThing.style.top = yPosition + "px";

//   var curOverf = event.currentTarget.style.overflow;

//   if (!curOverf || curOverf === "visible")
//     event.currentTarget.style.overflow = "hidden";

//   var isOverflowing = event.currentTarget.clientWidth < event.currentTarget.scrollWidth ||
//     event.currentTarget.clientHeight < event.currentTarget.scrollHeight;

//   event.currentTarget.style.overflow = curOverf;

//   event.currentTarget.style.backgroundColor = isOverflowing ? 'red' : '#eee'
// });

// function check(el) { 
//   var curOverf = el.style.overflow; 

//   if ( !curOverf || curOverf === "visible" ) 
//       el.style.overflow = "hidden"; 

//   var isOverflowing = el.clientWidth < el.scrollWidth
//       || el.clientHeight < el.scrollHeight; 

//   el.style.overflow = curOverf; 

//   return isOverflowing; 
// } 

// function gfg_Run() { 
//   ans = "No Overflow"; 

//   if (check(el_up)) { 
//       ans = "Content Overflowed";  
//   } 

//   el_down.innerHTML = ans; 
// }

// let t = 2;
// let p = 7;

// t === 2 && (p += 2)
// console.log(p)

// console.log('a' && 'b' && 0 && 'c')
// console.log('' || 'b' || 0 || 'c')

// function fibo(n) {
//   let fiboArray = []
//   if (n === 0) {
//     fiboArray.push(n)
//   } else if (n === 1) {
//     fiboArray.push(n - 1)
//     fiboArray.push(n)
//   } else {
//     fiboArray = [0, 1]
//     var result = 0
//     for (let i = 0; i < n - 1; i++) {
//       let firstNumber = fiboArray[i]
//       let secondNumber = fiboArray[i + 1]
//       result = firstNumber + secondNumber
//       fiboArray.push(result)
//     }
//   }
//   console.log(fiboArray[fiboArray.length - 1])
//   console.log(result)
// }

// fibo(41)

// let fiboArray = []

// for (let i = 0; i < 10; i++) {

// }
// let withoutCache = 0

// function fiboRecursive(n) {
//   if (n < 2) return n;
//   withoutCache++
//   return fiboRecursive(n - 1) + fiboRecursive(n - 2)
// }

// console.log(fiboRecursive(40))
// console.log(withoutCache)

// let cache = {
//   0: 0,
//   1: 1
// }
// let withCache = 0

// function newFibo() {
//   let cache = {
//     0: 0,
//     1: 1
//   };
//   return function cached(n) {
//     if (n in cache) return cache[n];
//     const result = cached(n - 1) + cached(n - 2);
//     cache[n] = result;
//     withCache++
//     return result
//   }
// }

// const cachedFibo = newFibo();
// const res = cachedFibo(40);
// console.log(res)
// console.log(withCache)

// let nestedArray = [1, [2, 3], [[4], 5, 6], 7, 8, [9, [[10]]]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrays = []
// let flattenedArray = []

// nestedArray.forEach( value => {
//   while (Array.isArray(value)) {
//     value.forEach( val => {
//       flattenedArray = [...flattenedArray, ...val]
//     })
//   }
// })

// while (nestedArray.some(Array.isArray)) {
//   for (let item of nestedArray) {
//     if (Array.isArray(item)) {
//       arrayIterate(item)  
//     }
//   }
// }


// function arrayIterate(arr) {
//   if (nestedArray.some(Array.isArray)) {
//     if (Array.isArray(arr)) {
//       nestedArray.splice(nestedArray.indexOf(arr), 1, ...arr)
//       arrayIterate(arr)
//     } else {
//       nestedArray.push(arr)
//     }
//   }
// }
// arrayIterate(nestedArray)

// console.log(nestedArray)
// console.log(arrays)

// let obj = {
//   name: 'ali'
// }

// function Bootcamp(mentor) {
//     this.mentor = mentor
//     this.ask = function(message) {
//       Bootcamp.prototype.ask.call(this, message.toUpperCase())
//       console.log('hasan')
//     }
// }

// const b = new Bootcamp('ali')

// Bootcamp.prototype.ask = function(question) {
//   console.log(`Hello ${this.mentor}, ${question}`)
// }

// b.ask('What is your name?')


// function Bootcamp(mentor) {
//   this.mentor = mentor

//   Bootcamp.prototype.ask = function(question) {
//     console.log(this.mentor, question)
//   }
// }




// Bootcamp.prototype.AnotherBootcamp = function(mentor) {
//   this.mentor = mentor

//   Bootcamp.prototype.AnotherBootcamp.prototype.speakUp = function(msg) {
//     Bootcamp.prototype.ask(this.mentor, msg.toUpperCase())
//   }
// }

// const js = Bootcamp.prototype.AnotherBootcamp('Parmida')
// js.speakUp('Is this really inheritance?')

// const js2 = new Bootcamp("Ali")
// js2.ask("The first object")

// console.log(js)
// console.log(js2)

// const numbers = document.querySelectorAll(".number")
const firstInput = document.querySelector("#first-input")
const secondInput = document.querySelector("#second-input")
const sumButton = document.querySelector("#sum")
const subtractionButton = document.querySelector("#subtraction")
const multiplicationButton = document.querySelector("#multiplication")
const divisionButton = document.querySelector("#division")
// const equalButton = document.querySelector("#equal")
const text = document.querySelector("#text")

const numbers = document.querySelectorAll(".number")

numbers.forEach( number => {
  number.addEventListener("click", () => {
    firstInput.value += number.textContent
  })
})

// equalButton.addEventListener("click", clickHandler)
sumButton.addEventListener("click", clickHandler)
subtractionButton.addEventListener("click", clickHandler)
multiplicationButton.addEventListener("click", clickHandler)
divisionButton.addEventListener("click", clickHandler)

function clickHandler(e) {
  if (e.target.textContent === "+") {
    let firstNumber = +firstInput.value
    let secondNumber = +firstInput.value
    text.innerHTML = result
    localStorage.setItem("result", "value")
  }
  if (e.target.textContent === "-") {
    let result = +firstInput.value - +secondInput.value
    text.innerHTML = result
  }
  if (e.target.textContent === "*") {
    let result = +firstInput.value * +secondInput.value
    text.innerHTML = result
  }
  if (e.target.textContent === "/") {
    let result = +firstInput.value / +secondInput.value
    text.innerHTML = result
  }
}