const cards = document.querySelectorAll(".card");
const card2 = document.querySelectorAll(".card2")[0];
const input = document.querySelector("#input")
const submitButton = document.querySelector("#submit-btn")
const timerContainer = document.querySelector(".timer-container")
const sectionTwoContainer = document.querySelector(".section-two-container")
const inputButtonContainer = document.querySelector("#input-button-container")
const warningAlert = document.querySelectorAll(".warning")[0];
const successDiv = document.querySelectorAll(".success")[0]
const errorAlert = document.querySelectorAll(".error")[0]


class Cash {
  constructor(value, isSelected) {
    this.value = value
    this.isSelected = isSelected
  }
}

let cash = []
let selectedCash = []

cards.forEach(e => {
  let newCash = new Cash(parseInt(e.firstElementChild.alt), false)
  cash.push(newCash)
  e.addEventListener("click", () => {
    e.style.transform = !e.style.transform ? "translateX(120px)" : "";
    e.style.opacity = e.style.transform === "translateX(120px)" ? "100%" : ""
    newCash.isSelected = !newCash.isSelected;
    let index = selectedCash.indexOf(newCash)
    newCash.isSelected ? selectedCash.push(newCash) : selectedCash.splice(index, 1)
    console.log(selectedCash)
  });
});

function balance() {
  let result = parseInt(input.value)
  let pureSelectedCash = [];
  let remainders = [];
  // cash.reverse()
  for (let item of selectedCash) {
    let itemIndex = selectedCash.indexOf(item)
    let count = 0
    while (result >= item.value) {
      // if (result - item.value < item.value && itemIndex !== selectedCash.length - 1) {
      //   break
      // }
      result -= item.value
      count += 1
    }
    // let itemIndex = selectedCash.indexOf(item)
    selectedCash[itemIndex].count = count
    pureSelectedCash = [...selectedCash]
    pureSelectedCash[itemIndex].remainder = result
    console.log(pureSelectedCash)
    // item.count === 0 && selectedCash.splice(itemIndex, 1)
  }
  // if (item.value > result) {
  //   let rem = Math.abs(result - item.value)
  //   if (rem % selectedCash[itemIndex + 1] === 0) {
      
  //   }
  // }

  // for (let item of selectedCash) {
  //   if (item.value * item.count === 0) {
      
  //   }
  //   if (!item.count) {
      
  //   }
  // }
  if (result === 0) {
    selectedCash.forEach( e => e.count === 0 && selectedCash.splice(selectedCash.indexOf(e), 1))
    return result
  } else {
    let result2 = parseInt(input.value)
    for (let item of selectedCash) {
      // item.count = 0
      let itemIndex = selectedCash.indexOf(item)
      let count = 0
      while (result2 >= item.value) {
        if (result2 - item.value < item.value && itemIndex !== selectedCash.length - 1) {
          break
        }
        result2 -= item.value
        count += 1
      }
      // let itemIndex = selectedCash.indexOf(item)
      selectedCash[itemIndex].count = count
      
      // pureSelectedCash = [...selectedCash]
      // pureSelectedCash[itemIndex].remainder = result
      // console.log(pureSelectedCash)
      // selectedCash.forEach(e => e.count === 0 && selectedCash.splice(itemIndex, 1))
    }
    selectedCash.forEach( e => e.count === 0 && selectedCash.splice(selectedCash.indexOf(e), 1))
    return result2
  }
  // return result
}

submitButton.addEventListener('click', () => {
  let rem = balance()
  console.log(selectedCash)
  if (input.value !== "" && rem === 0) {
    successDiv.innerHTML = ''
    successDiv.innerHTML = '<strong>تراکنش موفق: </strong>'
    // selectedCash.reverse()
    selectedCash.forEach(e => {
      let itemIndex = selectedCash.indexOf(e)
      if (itemIndex === 0) {
        const span = document.createElement("span")
        span.innerHTML = `شما ${e.count} اسکناس ${e.value} تومانی`
        successDiv.appendChild(span)
      } else if (itemIndex < selectedCash.length - 1) {
        const span = document.createElement("span")
        span.innerHTML = `، ${e.count} اسکناس ${e.value} تومانی`
        successDiv.appendChild(span)
      } else if (itemIndex === selectedCash.length - 1) {
        const span = document.createElement("span")
        span.innerHTML = ` و ${e.count} اسکناس ${e.value} تومانی`
        successDiv.appendChild(span)
      }
    })
    const span = document.createElement("span")
    span.innerHTML = ` دریافت کردید`
    successDiv.appendChild(span)
    successDiv.style.visibility = "visible"
    errorAlert.style.visibility = 'hidden'
  } else {
    successDiv.style.visibility = "hidden"
    errorAlert.style.visibility = 'visible'
    errorAlert.innerHTML = `<strong>تراکنش ناموفق:</strong> عدم تناسب مبلغ درخواستی با اسکناس‌های انتخابی`
    if (input.value === "") {
      errorAlert.innerHTML = `مبلغ را وارد کنید`
    }
  }
  // selectedCash = []
})

let timer = document.querySelector("#timer")
let m = 1
let s = 60

let id = setInterval(function () {
  m = 0
  s -= 1
  timer.innerHTML = `<strong>0${m} : ${s >= 10 ? s : '0' + s}</strong>`
  if (!s) {
    clearInterval(id)
    submitButton.disabled = true
    submitButton.style.opacity = '50%'
    submitButton.style.backgroundColor = "grey"
    submitButton.style.cursor = "not-allowed"
    warningAlert.style.visibility = 'visible'
    cards.forEach(e => {
      e.style.pointerEvents = 'none'
      e.style.transform = "";
      e.style.opacity = "50%"
    })
    successDiv.style.visibility = 'hidden'
    errorAlert.style.visibility = 'hidden'
  }
}, 1000)