
function checkPalindrome(num) {
    let result = ''
    let numExtorted = num
    while (numExtorted / 10 > 0) {
        let dec = numExtorted % 10
        result += dec
        numExtorted = Math.floor(numExtorted / 10)
    }
    if (result == num) console.log(`The ${num} is palindrome`)
    else console.log(`The ${num} is not palindrome`)
}

checkPalindrome(929)