let arr = [0, 5, 61, 2, 44];
let arr2 = [1, 2];

let obj = {
  name: "John",
  age: 34,
};

// simple object/array destructuring
const [a, b, c] = arr;
console.log(a, b, c);

const [d, e, f = 3, g = 4] = arr2;
console.log(d, e, f, g);

({ name: hisName, age } = obj);
console.log(hisName, age);

// swapping variables using destructuring
let x, y;
[x, y] = arr;
console.log(x, y);

let m = 1,
  n = 2;
[m, n] = [n, m];
console.log(m, n);

let arr3 = [1, 2, 3];
[arr3[1], arr3[2]] = [arr3[2], arr3[1]];
console.log(arr3);

function returnBandA(arr1, arr2) {
  return arr2.concat(arr1);
}

/* 
destructuring nested arrays/objects
and some features for ignoring some members
*/
[w, , q, z] = returnBandA([0, 1, 2], [3, 4]);
console.log(w, y, z);

let obj3 = {
  name: "Joel",
  age: 43,
  address: {
    city: "London",
    no: 5,
  },
  score: 19,
};

({name: joelName, address: { city: joelCity }} = obj3);
console.log(joelName, joelCity);

/*
destructuring objects/arrays at the time of function creation
*/
let obj1 = {
  name: "John",
  age: 28,
};

function propsLogger({ name: hisName, age } = { name: "Joe", age: 34 }) {
  console.log("Name:", hisName, "Age:", age);
}

propsLogger();

let arr4 = [0, 2, 9];

function arrLogger([a, , c, d = 5] = [23, , 1]) {
  console.log(a, c, d);
}

arrLogger();

/*
destructuring nested objects/arrays at the time of function creation
*/

let obj2 = {
  name: "Jil",
  age: 18,
  address: {
    city: "LA",
    no: 102,
  },
  score: 16,
};

function logPerson({ name, age, address: { city } }) {
  console.log(name, age, city);
}

logPerson(obj2);

let arr5 = [1, [27, 2], 6];

function arr5Logger([a, [b, c]]) {
  console.log(a, b, c);
}

arr5Logger(arr5);
