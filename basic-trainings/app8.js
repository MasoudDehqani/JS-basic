
function primeNumber(num) {
    let isPrime = true
    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            isPrime = false
            break
        }
        else isPrime = true
    }
    if (isPrime) console.log(`${num} is a prime number`)
    else console.log(`${num} is not a prime number`)
}

primeNumber(37)