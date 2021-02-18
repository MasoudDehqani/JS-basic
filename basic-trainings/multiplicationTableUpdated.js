// // Version 1
// let targetNumber = 1;
// let table = ``;
// let multiplicationResult = 0;

// // Version 1
// do {
//   table += '\t';
// } while (!table);

// while (targetNumber < 10) {
//   for (let i = 1; i < 10; i++) {
//     multiplicationResult = i * targetNumber;
//     multiplicationResult !== 1 && (table += `${multiplicationResult}\t`);
//   }
//   targetNumber++
//   table += `\n`
// };

// console.log(table)

// // Version 2
// let targetNumber2 = 1
// let table2 = ``;
// let multiplicationResult2 = 0

// while (targetNumber2 < 10) {
//   for (let i = 1; i < 10; i++) {
//     multiplicationResult2 = i * targetNumber2;
//     if (i === 1) {
//       targetNumber2 === 1 ? (table2 += '\t') : (table2 += `${targetNumber2}\t`);
//       continue
//     }
//     table2 += `${multiplicationResult2}\t`;
//   }
//   targetNumber2++
//   table2 += `\n\n`
// };

// console.log(table2)

// // Version 3
// for (let i = 1; i < 10; i++) {
//   let targetNumber = 1
//   let result = 1
//   let row = ``
//   while (targetNumber < 10) {
//     result = i * targetNumber;
//     (targetNumber === 1 && i === 1) && (row += `\t`);
//     (targetNumber === 1 && result !== 1) && (row += `${i}\t`);
//     row += `${result}\t`;
//     targetNumber++
//   };
//   console.log(`${row}\n`)
// }

// // Version 4
// for (let i = 1; i < 10; i++) {
//   let targetNumber = 1
//   let result = 1
//   let row = ``
//   while (targetNumber < 10) {
//     result = i * targetNumber;
//     if (targetNumber === 1 && i === 1) {
//       row += `\t`
//       targetNumber++
//       continue
//     }
//     result < 10 ? row += ` ${result}\t` : row += `${result}\t`;
//     targetNumber++
//   };
//   console.log(`${row}\n`)
// }

// console.log(age2)
// console.log(age)

// var age2 = 23;
// let age = 16;

let x = 2;
let y;

// if (b === null) {
//   console.log()
// }

function foo(a, b) {
  if (b == 0 || a == 0) return 2 + 2;
  return a + b
}

console.log(foo(0, y))