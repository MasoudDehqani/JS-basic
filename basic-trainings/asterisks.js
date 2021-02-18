// Asterisks Exercise
function starLog(starCount = 6) {
  for (let i = 2; i <= starCount; i++) {
    let asterisks = ''
    for (let j = 1; j <= i; j++) {
      asterisks += '*'
    }
    console.log('*')
    console.log(asterisks)
  }
}

starLog(9)