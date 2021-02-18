const addContactPart = document.querySelector("#add-contact-part");
const addButton = document.querySelector("#add-button-container button");
const cancellButton = document.querySelector("#cancell-button");
const saveButton = document.querySelector("#save-button");
const newButton = document.querySelector("#new-button");
const contactsContainer = document.querySelector("#contacts-container");
const nameInput = document.querySelector("#name-input");
const phoneInput = document.querySelector("#phone-input");
const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector("#search-container");
// const x2Button = document.getElementsByClassName("x-button");

// The line below creates a node which cannot repeated more than one time in node
// const contact = document.createElement("ul");

let contacts = [];
let deletedContacts = [];

class Contact {
  constructor(id, name, phone) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

addContactPart.style.display = "none";
addButton.addEventListener("click", function () {
  addContactPart.style.display = "";
});
cancellButton.addEventListener("click", function () {
  addContactPart.style.display = "none";
  nameInput.value = null;
  phoneInput.value = null;
});
newButton.addEventListener("click", function () {
  nameInput.value = null;
  phoneInput.value = null;
});

// let nameInputValue = nameInput.value;
// let phoneInputValue = phoneInput.value;

// function xButtonHandle(e) {
//   if (e.target.id === parseInt())
// }

function saveEventHandler() {
  const contactContainer = document.createElement("ul"); // Now it can be repeated with each button click
  const xButton = document.createElement("button");
  const contactInnerTag = document.createElement("li");

  if (nameInput.value && phoneInput.value) {
    const newContact = new Contact();
    if (deletedContacts.length !== 0) {
      newContact.id = deletedContacts[0].id
      deletedContacts.splice(0, 1)
    } else {
      newContact.id = contacts.length + 1
    }

    newContact.name = `${nameInput.value}`
    newContact.phone = `${phoneInput.value}`
    contacts.push(newContact);
    console.log(contacts);
    contactsContainer.appendChild(contactContainer);
    contactContainer.appendChild(xButton);
    contactContainer.appendChild(contactInnerTag);
    // The line below cannot put directly after createElement()!!
    xButton.textContent = "x";
    contactInnerTag.textContent = `Name: ${nameInput.value}, Phone No.: ${phoneInput.value}`;
    // contactTag.innerHTML = `<li><button class="x-button" id="x${contacts.length}">x</button><p>Name: ${nameInput.value}, Phone No.: ${phoneInput.value}</p></li>`;
    nameInput.value = null;
    phoneInput.value = null;

    xButton.onclick = function () {
      contactContainer.innerHTML = "";
      const contactIndex = contacts.indexOf(newContact);
      if (contactIndex !== -1) {
        deletedContacts.push(newContact)
        contacts.splice(contactIndex, 1);
      }
      console.log(contacts);
    };
  }
}

saveButton.addEventListener("click", saveEventHandler);

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    saveEventHandler()
  }
})

// x2Button[0].addEventListener("click", function (e) {
//   let id1 = e.target.id;
//   console.log(typeof id1);
// });

// function xButtonGetter() {
//   let xButton = document.querySelectorAll(".x-button");
//   for (b of xButton) {
//     b.onclick = xButtonClickHandler;
//   }
// }

// function xButtonClickHandler(e) {
//   contactsContainer.removeChild(e.target.parentElement.parentElement);
//   let [, buttonID] = e.target.id.split("");

//   contacts.forEach(function (value) {
//     if (value.id === +buttonID) {
//       let valueIndex = contacts.indexOf(value);
//       contacts.splice(valueIndex, 1);
//     }
//   });

// for (c of contacts) {
//   if (c.id === +buttonID) {
//     contacts.splice(c.id - 1, 1);
//     for (m of contacts) {
//       if (m.id > c.id) {
//         m.id -= 1;
//       }
//     }
//   }
// }
// }

searchButton.addEventListener("click", function () {
  let found = [];
  searchContainer.innerHTML = ''
  for (c of contacts) {
    if (searchBar.value === c.name || searchBar.value === c.phone) {
      found.push(c);
      let searchResultP = document.createElement("p");
      searchContainer.appendChild(searchResultP);
      searchResultP.innerHTML = `Name: ${c.name} , Phone: ${c.phone}`;
    }
    console.log(found);
  }
  let searchResultP = document.createElement("p");
  searchContainer.appendChild(searchResultP);
  searchResultP.innerHTML = `${found.length} found`;
});