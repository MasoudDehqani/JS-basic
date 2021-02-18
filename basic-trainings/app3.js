function numberCounter(num) {
    for (let i = 1; i < num; i++) {
        result = ''
        for (let j = 1; j <= i; j++) {
            result += j
        }
        console.log(result)
    }
}

numberCounter(6)