

let result = 0

for (let i = 100; i < 200; i++) {
    if (i % 9 === 0) {
        result += i
        console.log(`${i} is divisible by 9`)
    }
}

console.log(`Sum = ${result}`)
