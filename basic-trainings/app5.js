function getReverse(num) {
    let result = ''
    while (num / 10 > 0) {
        let dec = num % 10
        result += dec
        num = Math.floor(num / 10)
    }
    console.log(result)
}

getReverse(9218)