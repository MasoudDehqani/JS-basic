class PhoneBookRecord {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class PhoneBook {
  constructor() {
    this.records = [];
  }

  add(name, phone) {
    const record = new PhoneBookRecord(name, phone);
    this.records.push(record);
    return record
  }

  search(keyword) {
    let searchResult = this.records.filter(function (record) {
      return record.name.toLowerCase().includes(keyword.toLowerCase());
      // return record.toLowerCase === keyword.toLowerCase
    });
    return searchResult;
  }

  remove(record) {
    let recordIndex = this.records.indexOf(record);
    if (recordIndex !== -1) {
      this.records.splice(recordIndex, 1);
    }
    // this.records = this.records.filter(function (item) {
    //   return record.name !== item.name;
    // });
  }
}

class TagBuilder {
  constructor(tagName) {
    this.tag = document.createElement(tagName);
  }

  appendTo(parent) {
    if (parent instanceof TagBuilder) {
      parent.returnTagElement().appendChild(this.tag);
    }
    else parent.appendChild(this.tag)
    return this;
  }

  setText(text) {
    this.tag.textContent = text;
    return this;
  }

  setType(type) {
    this.tag.type = type;
    return this;
  }

  setPlaceholder(placeholder) {
    this.tag.placeholder = placeholder;
    return this;
  }

  show() {
    this.tag.style.display = 'block'
    return this
  }

  hide() {
    this.tag.style.display = 'none'
    return this
  }

  returnTagElement() {
    return this.tag
  }
}

// This is a special method in a design pattern which is called "builder"
const builder = {
  create: function (name) {
    return new TagBuilder(name);
  },
};

const phoneBookContainer = document.querySelector("#phone-book-container");

class AppPhoneBook {
  constructor(container) {
    this.container = container;
    this.phoneBook = new PhoneBook();
  }

  init() {
    builder
      .create("h1")
      .setText("Phone Book (using builder design pattern)")
      .appendTo(this.container);

    const searchPanel = builder
      .create('div')
      .appendTo(this.container);

    const searchBar = builder
      .create('input')
      .setPlaceholder('Enter a Name for Search')
      .setType('text')
      .appendTo(searchPanel)
      .returnTagElement();
;
    const searchButton = builder
      .create('button')
      .setText('Search')
      .appendTo(searchPanel)
      .returnTagElement()
      .onclick = () => {
        foundContainer.innerHTML = ''
        const inputValue = searchBar.value
        const foundrecords = this.phoneBook.search(inputValue)
        foundrecords.forEach(function(value) {
          builder
            .create('li')
            .setText(`${value.name}, ${value.phone}`)
            .appendTo(foundContainer)
        })
      };

    builder
      .create('br')
      .appendTo(searchPanel);

    const addPanel = builder
      .create('div')
      .hide()
      .appendTo(this.container);
    
    const addButton = builder
      .create('button')
      .setText('Add a new contact')
      .appendTo(searchPanel)
      .returnTagElement()
      .onclick = function() {
        addPanel.show()
      };

    const addNameInput = builder
     .create('input')
     .setPlaceholder('Enter a New Name')
     .appendTo(addPanel)
     .returnTagElement();

    const addNumInput = builder
      .create('input')
      .setPlaceholder('Enter a New number')
      .appendTo(addPanel)
      .returnTagElement();
    
    const saveButton = builder
      .create('button')
      .setText('Save')
      .appendTo(addPanel)
      .returnTagElement()
      .onclick = () => {
        let name = addNameInput.value
        let num = addNumInput.value
        if (name && num) {
          const r = this.phoneBook.add(name, num)
        console.log(this.phoneBook.records)
        const item = builder
          .create('li')
          .setText(`${name}, ${num}`)
          .appendTo(listItems)
          .returnTagElement();

        builder
          .create('button')
          .setText('x')
          .appendTo(item)
          .returnTagElement()
          .onclick = () => {
            this.phoneBook.remove(r)
            console.log(this.phoneBook.records)
            listItems.removeChild(item)
          }
        
        addNameInput.value = null
        addNumInput.value = null
        }
        
      };

    const cancellButton = builder
      .create('button')
      .setText('cancell')
      .appendTo(addPanel)
      .returnTagElement()
      .onclick = function() {
        addPanel.hide()
      };;

    builder
      .create('br')
      .appendTo(addPanel);
    
    const listContainer = builder
      .create('div')
      .appendTo(this.container);

    const listItems = builder
      .create('ul')
      .appendTo(listContainer)
      .returnTagElement();

    const foundContainer = builder
      .create('ul')
      .appendTo(this.container)
      .returnTagElement();
    
    // const recordItems = builder
    //   .create('li')
    //   .appendTo(listItems);
  }
}

const app = new AppPhoneBook(phoneBookContainer);
app.init();
// console.log(app);

// let phoneBook = new PhoneBook();

// phoneBook.add("abc", "123456");
// phoneBook.add("b", "2");
// phoneBook.add("c", "3");
// phoneBook.add("d", "4");

// console.log(phoneBook.records); // It does not show the first item in the console
// console.log(phoneBook.records[0]); // but it can be accessed
// console.log(phoneBook.records.length); // and the length is 4

// let x = phoneBook.search("AbC");
// console.log(x[0]);

// phoneBook.remove(x[0]);
// console.log(phoneBook.records);

// class ElementBuilder {
//   constructor(tagName) {
//     this.element = document.createElement(tagName);
//   }
// }
