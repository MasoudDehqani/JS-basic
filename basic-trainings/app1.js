// // Exercise 1
// for (let i = 1; i < 8; i++) {
//     let result = ''
//     for (j = 1; j <= i; j++) {
//         result += '*'
//     }
//     console.log(result)
// }

// // Exercise 2
// function getFactorial(num) {
//     let result = num
//     for (let i = 1; i < num; i++) {
//         result *= i
//     }
//     console.log(result)
// }

// getFactorial(6)

// // Exercise 3
// function numberCounter(num) {
//     for (let i = 1; i < num; i++) {
//         let result = ''
//         for (let j = 1; j <= i; j++) {
//             result += j
//         }
//         console.log(result)
//     }
// }

// numberCounter(6)

// // Exercise 4
// function numberRepeater(num) {
//     for (let i = 1; i <= num; i++) {
//         let result = ''
//         for (let j = 1; j <= i; j++) {
//             result += i
//         }
//         console.log(result)
//     }
// }

// numberRepeater(6)

// // Exercise 5
// function getReverse(num) {
//     let result = ''
//     while (num / 10 > 0) {
//         let dec = num % 10
//         result += dec
//         num = Math.floor(num / 10)
//     }
//     console.log(result)
// }

// getReverse(9218)

// // Exercise 6
// function checkPalindrome(num) {
//     let result = ''
//     let numExtorted = num
//     while (numExtorted / 10 > 0) {
//         let dec = numExtorted % 10
//         result += dec
//         numExtorted = Math.floor(numExtorted / 10)
//     }
//     if (result == num) console.log(`The ${num} is palindrome`)
//     else console.log(`The ${num} is not palindrome`)
// }

// checkPalindrome(929)

// // Exercise 7
// let result = 0

// for (let i = 100; i < 200; i++) {
//     if (i % 9 === 0) {
//         result += i
//         console.log(`${i} is divisible by 9`)
//     }
// }

// console.log(`Sum = ${result}`)

// // Exercise 8
// function primeNumber(num) {
//     let isPrime = true
//     for (let i = num - 1; i > 1; i--) {
//         if (num % i === 0) {
//             isPrime = false
//             break
//         } else isPrime = true
//     }
//     if (isPrime) console.log(`${num} is a prime number`)
//     else console.log(`${num} is not a prime number`)
// }

// primeNumber(37)

// Exercise 9
function reverseAsterisks() {
  for (let i = 5; i > 0; i--) {
    let asterisks = "";
    for (let j = 1; j < 6; j++) {
      j < i ? asterisks += " " : asterisks += "*";
    }
    console.log(asterisks);
  }
}

reverseAsterisks();
