// Prime Numbers Exercise
for (let i = 100; i > 0; i--) {
  let isPrime = true
  for (let j = i - 1; j > 1; j--) {
    if (i % j === 0) {
      isPrime = false
      break
    }
  }
  isPrime && console.log(i)
}