// Multiplication Table Exercise
// for (let i = 1; i < 10; i++) {
//   let row = ``
//   i !== 1 ? row = `${i}` : row = ' '
//   for (let j = 1; j < 10; j++) {
//     let result = i * j;
//     result <= 9 ? row += `\t\t ${result}` : row += `\t\t${result}`
//   }
//   console.log('')
//   console.log(row)
// }

// let num1 = 1
// let num2 = 1
// do {
//   let result = num1 * num2
//   num1++
//   num2++
// } while (num1 < 10);


// for (let i = 1; i < 10; i++) {
//   do {
//     table += `\t`
//     let result = i * num
//     table += result
//   } while (num < 10);

//   console.log(table)
// }

let targetNumber = 1;
let table = ``;
let multiplicationResult = 0;

while (targetNumber < 10) {
  for (let i = 1; i < 10; i++) {
    multiplicationResult = i * targetNumber;
    if (i === 1) {
      targetNumber === 1 ? (table += '\t') : (table += `${targetNumber}\t`);
      continue
    }
    table += `${multiplicationResult}\t`;
  }
  targetNumber++
  table += `\n\n`
};

console.log(table)

// num !== 1 && (table += `${num}\t`);
// (num === 1 && i === 1) && (table += '\t');
// (i === 1 && num !== 1) && (table += `${num}\t`);