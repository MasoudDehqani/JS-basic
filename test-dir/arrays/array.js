// let arr1 = [1, 18, 652, 49, 283, 'true']

// Exercise 1
// function arrSum(arr) {
//     let result = 0
//     for (n of arr) {
//         if (typeof n === 'number') result += n
// }
// console.log(result)
// }

// arrSum(arr1)

// // Exercise 2
// function revArr(arr) {
//     let reversed = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i])
//     }
//     console.log(reversed)
// }

// revArr(arr1)

// Exercise 3
let arr2 = [21, 3, 21, 101, 60, 3, 21, 58, 1201, 101, 58, 3, 3, 3, 3, 58, 0, 861, 0, 0, 20001, 0]

function repeatedCounter(arr) {
    let dups = 0
    for (let i = 0; i < arr.length; i++) {
        let isDeleted = false
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                if (!isDeleted) {
                    dups += 1
                    isDeleted = true
                }
                arr.splice(j, 1)
                j -= 1
            }
            if (j === arr.length - 1) {
                arr.splice(i, 1)
                i = -1
            }
        }
    }
    console.log(dups)
}

repeatedCounter(arr2)

let arr3 = [21, 3, 21, 101, 60, 3, 21, 58, 1201, 101, 58, 3, 3, 3, 3, 58, 0, 861, 0, 0, 20001, 0]

function improverRepeatedCounter(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue
            let index = temp.indexOf(element)
            if (element === arr[j] && index === -1) {
                temp.push(element)
            }
        }
    }
    console.log(temp.length)
}

improverRepeatedCounter(arr3)


// Exercise 4
let arr4 = [21, 3, 21, 101, 60, 3, 21, 58, 1201, 101, 58, 3, 3, 3, 3, 58, 0, 861, 0, 0, 20001, 0]
let arr5 = [0, 28, 17, 0, 390, 1, 0, 17]

function uniqueCounter(arr) {
    let temp = []
    let hasEqual = false
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue
            if (element === arr[j]) {
                hasEqual = true
                break
            } else {
                hasEqual = false
            }
        }
        if (!hasEqual) {
            temp.push(element)
        }
    }
    console.log(temp.length)
}

uniqueCounter(arr4)
uniqueCounter(arr5)