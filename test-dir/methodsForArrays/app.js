let arr1 = [28, 1, 184, 66, 0];
let arr2 = [0, 2020, 73, 391, 3, 800];
let arr3 = [550, 12, 20];

// push(), pop(), unshift(), shift
let pushArr = arr1.push(2);
console.log(pushArr);
console.log(arr1);

let popArr = arr1.pop();
console.log(popArr);
console.log(arr1);

let unshiftArr = arr1.unshift(20);
console.log(unshiftArr);
console.log(arr1);

let shiftArr = arr1.shift();
console.log(shiftArr);
console.log(arr1);

// splice()
let spliceArr = arr2.splice(2, 2, 58);
console.log(spliceArr);
console.log(arr2);

// sort(), reverse()
let sortedArray = arr2.sort(function (a, b) {
  return a - b;
});
console.log(sortedArray);

let reversedArray = arr2.reverse();
console.log(reversedArray);

// split(), join(), concat(), toString()
let str1 = "Tehran, Tabriz, Ahvaz, Shiraz";
let arr4 = ["Isfahan", "Mash'had", "Kerman", "Khoozestan"];

let splitArr = str1.split(", ");
console.log(splitArr);
let joinStr = arr4.join(" - ");
console.log(joinStr);
let toStringStr = arr4.toString();
console.log(toStringStr);

let concatArr = arr4.concat(arr3);
console.log(concatArr);

// indexOf(), lastIndexOf(), findIndex()
let indexOfValueArray = arr4.indexOf("Kerman");
let indexOfValueString = str1.indexOf("Ahvaz");
console.log(indexOfValueArray);
console.log(indexOfValueString);

let arr5 = [100, 620, 4, 15, 4];
let str2 = "Tehran, Tabriz, Ahvaz, Shiraz, Ahvaz";

let lastIndexOfValueArray = arr5.lastIndexOf(4);
let lastIndexOfValueString = str2.lastIndexOf("Ahvaz");
console.log(`lastIndexOf array: ${lastIndexOfValueArray}`);
console.log(`lastIndexOf string: ${lastIndexOfValueString}`);

let findIndex = arr5.findIndex(function (value) {
  return value > 100;
});
console.log(`findIndex: ${findIndex}`);

// slice()
let sliceArray = arr5.slice();
console.log(sliceArray);

let sliceArrayEdited = arr5.slice(1, 4); //start number is inclusive and end number is exclusive
console.log(sliceArrayEdited);

// filter(), map(), forEach()
let arr7 = [15, 1, 370, 23, 0];

let filterArray = arr7.filter(function (value) {
  return value > 15;
});

console.log(filterArray);

let mapArray = arr7.map(function (value) {
  return value * 2;
});

console.log(mapArray);

function myMap(arr, fn) {
  let resultArray = [];
  for (i of arr) {
    output = fn(i);
    resultArray.push(output);
  }
  return resultArray;
}

let myMapArr = myMap(arr7, function (value) {
  return value * 2;
});
console.log(myMapArr);

arr7.forEach(function (value) {
  console.log(`Value: ${value}`); //forEach method doesn't return anything
});

// every(), some()
let arr8 = [0, 5, 8, 3];

let everyResult = arr8.every(function (value) {
  return value > 0;
});

console.log(everyResult);

let someResult = arr8.some(function (value) {
  return value > 0;
});

console.log(someResult);

// find()
let findResult = arr8.find(function (value) {
  return value > 0;
});

console.log(findResult);
