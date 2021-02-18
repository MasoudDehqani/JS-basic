// Copy an array/object, Shallow copy VS Deep copy
let arr6 = [12, 29, [0, 38, 20], 92, 3];
// let copyArray = arr6
// let copyArray = JSON.parse(JSON.stringify(arr6));
// let copyArray = arr6.slice()
let copyArray = [...arr6];
// copyArray[1] = 18
// copyArray[2][1] = 800;
// copyArray[2] = [21, 22];
copyArray.push([88, 288])
console.log(arr6);
console.log(copyArray);

let obj1 = {
  name: "John",
  age: 28,
  contacts: {
    phone: "123456",
    email: "abc@mail.com",
  },
  score: 17,
};

// let copyObj = obj1
// let copyObj = JSON.parse(JSON.stringify(obj1));
// let copyObj = Object.assign({}, obj1);
// let copyObj = { ...obj1 };
// copyObj.name = 'Michael'
// copyObj.contacts.phone = "654321";
// copyObj.contacts = {
//   phone: "987654321",
// };

// console.log(obj1);
// console.log(copyObj);
