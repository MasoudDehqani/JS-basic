const CHANGE_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
};
const ERROR_TYPE = {
  NOT_FOUND: "NOT_FOUND",
  NOT_POSSIBLE: "NOT_POSSIBLE",
  INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

// Your code here...

// Getting all required DOM elements
const numbersContainer = document.querySelector("#numbers-container");
const radioUp = document.querySelectorAll("#type-container input")[0];
const radioDown = document.querySelectorAll("#type-container input")[1];
const itemInput = document.querySelector("#item-input");
const countInput = document.querySelector("#count-input");
const submitButton = document.querySelector("#submit-btn");
const errorContainer = document.querySelector("#error-container");

// Creating a function to call it whenever a change is applied to numbers array
function spanFiller() {
  numbersContainer.innerHTML = "";
  numbers.forEach(function (item) {
    let span = document.createElement("span");
    span.textContent = item;
    numbersContainer.appendChild(span);
  });
}
// Calling it, so that the page won't be empty when loaded for 1st time
spanFiller();

// Adding event listener to submit button and defining the required function
submitButton.addEventListener("click", submitButtonClickHandler);

// As the content of errors (not logic) are the same, one function prevents repetition
function errorHandler(errorType) {
  let span = document.createElement("span");
  errorContainer.innerHTML = "";
  errorContainer.appendChild(span);
  span.textContent = errorType;
  span.setAttribute("id", "error");
}

function submitButtonClickHandler() {
  // Getting the index of what comes from item input element (if exists in numbers array)
  let temp = numbers.indexOf(parseInt(itemInput.value));
  let itemIndex = temp >= 0 && temp;
  console.log(temp)
  console.log(itemIndex)

  /* 
  Each of "UP" and "Down" needs its own logic for both error and success.
  So, the function is seperated into two general parts.
  */

  // Designing the "UP" part with 1 'if' for success and 3 'else if' s for 3 errors
  if (radioUp.checked) {
    if (numbers.includes(parseInt(itemInput.value)) &&
      itemIndex + +countInput.value < numbers.length &&
        itemInput.value !== '' && countInput.value !== '') {
        errorContainer.innerHTML = "";
        let newItemIndex = itemIndex + +countInput.value;
        
        numbers.splice(itemIndex, 1);

        numbers.splice(newItemIndex, 0, +itemInput.value)

        // let item = numbers.filter(function (element) {
        //   return element === +itemInput.value;
        // });

        // let deletedItems = numbers.filter(function (item) {
        //   return numbers.indexOf(item) > newItemIndex;
        // });

        // numbers.splice(newItemIndex + 1);

        // numbers.splice(itemIndex, 1);

        // numbers = [...numbers, ...item, ...deletedItems];
        spanFiller();

    } else if (!numbers.includes(+itemInput.value)) { // Logic for 3 errors of "UP" part starts here
        errorHandler(ERROR_TYPE.NOT_FOUND)
    } else if (itemIndex + parseInt(countInput.value) >= numbers.length) {
        errorHandler(ERROR_TYPE.NOT_POSSIBLE)
    } else if (!itemInput.value || !countInput.value) {
        errorHandler(ERROR_TYPE.INVALID_INPUT)
    }
  }

  // Designing the "DOWN" part with 1 'if' for success and 3 'else if' s for 3 errors
  if (radioDown.checked) {
    if (numbers.includes(parseInt(itemInput.value)) &&
      itemIndex - +countInput.value >= 0 &&
      itemInput.value !== '' && countInput.value !== '') {
        errorContainer.innerHTML = "";
        let newItemIndex = itemIndex - +countInput.value;
        
        numbers.splice(itemIndex, 1);

        numbers.splice(newItemIndex, 0, +itemInput.value)

        // let item = numbers.filter(function (element) {
        //   return element === +itemInput.value;
        // });

        // let deletedItems = numbers.filter(function (element) {
        //   return numbers.indexOf(element) < newItemIndex;
        // });

        // numbers.splice(itemIndex, 1);

        // numbers.splice(0, newItemIndex);

        // numbers = [...deletedItems, ...item, ...numbers];
        spanFiller();
    } else if (!numbers.includes(+itemInput.value)) { // Logic for 3 errors of "DOWN" part starts here
        errorHandler(ERROR_TYPE.NOT_FOUND)
    } else if (itemIndex - parseInt(countInput.value) < 0) {
        errorHandler(ERROR_TYPE.NOT_POSSIBLE)
    } else if (!itemInput.value || !countInput.value) {
        errorHandler(ERROR_TYPE.INVALID_INPUT)
    }
  }
}

// function radioButtonToggle() {
//   radioUp.checked = !radioDown.checked
// }

// radioButtonToggle()

// radioUp.addEventListener("click", function (e) {
//   e.target.checked = true;
//   radioDown.checked = false;
// });

// radioDown.addEventListener("click", function (e) {
//   e.target.checked = true;
//   radioUp.checked = false;
// });

// Adding the "Enter" key pf keyboard to the submit button functionality
itemInput.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    submitButtonClickHandler()
  }
})

countInput.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    e.preventDefault()
    submitButton.click()
  }
})

// document.addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     submitButtonClickHandler()
//   }
// })