function getFactorial(num) {
  let result = num;
  for (let i = 1; i < num; i++) {
    result *= i;
  }
  console.log(result);
}

getFactorial(6);
