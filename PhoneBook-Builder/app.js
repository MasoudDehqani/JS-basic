class PhoneBookRecord {
  constructor(name, phone) {
    this.name = name
    this.phone = phone
  }
}

class PhoneBook {
  constructor() {
    this.records = []
  }

  add(name, phone) {
    const record = new PhoneBookRecord(name, phone)
    this.records.push(record)
    return record
  }

  remove(record) {
    // const recordIndex = this.records.indexOf(record)
    // if (recordIndex !== -1) {
    //     this.records.splice(recordIndex, 1)
    // }
    this.records = this.records.filter(function (item) {
      return record !== item
    })
  }

  search(keyword) {
    const found = this.records.filter((item) => {
      return item.name.includes(keyword)
      // return item.name === keyword
    })
    return found
  }
}

const phoneBookContainer = document.querySelector('#phone-book-container')

const builder = {
  create: function (tagName) {
    return new tagBuilder(tagName)
  }
}

class tagBuilder {
  constructor(tagName) {
    this.tag = document.createElement(tagName)
    this.phoneBook = new PhoneBook
  }

  appendTo(parent) {
    parent.appendChild(this.tag)
    return this
  }

  setText(text) {
    this.tag.textContent = text
    return this
  }

  setType(type) {
    this.tag.type = type
    return this
  }

  setPlaceholder(placeholder) {
    this.tag.placeholder = placeholder
    return this
  }

  setClass(className) {
    this.tag.setAttribute('class', className)
    return this
  }

  setId(IdName) {
    this.tag.setAttribute('id', IdName)
    return this
  }

  setOnClick(fn) {
    this.tag.onclick = fn
    return this
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

class PhoneBookApp {
  constructor() {
    this.phoneBook = new PhoneBook()
  }

  init() {
    builder
      .create('h1')
      .setId('main-header')
      .setText('PhoneBook App')
      .appendTo(phoneBookContainer)

    const mainPanel = builder
      .create('div')
      .setId('main-panel')
      .appendTo(phoneBookContainer)
      .returnTagElement()

    const searchButton = builder
      .create('button')
      .setText('Search a Contact')
      .appendTo(mainPanel)
      .setOnClick(() => {
        searchPanel.show()
      })

    const addButton = builder
      .create('button')
      .setText('Add a New Contact')
      .appendTo(mainPanel)
      .setOnClick(() => {
        addPanel.show()
      })

    const searchPanel = builder
      .create('div')
      .setId('search-panel')
      .appendTo(phoneBookContainer)
      .hide()

    const searchBar = builder
      .create('input')
      .setType('text')
      .setPlaceholder('Enter a name to search')
      .appendTo(searchPanel.returnTagElement())

    const findButton = builder
      .create('button')
      .setText('Find')
      .appendTo(searchPanel.returnTagElement())
      .setOnClick(() => {
        const keyword = searchBar.returnTagElement().value
        const found = this.phoneBook.search(keyword)
        foundList.returnTagElement().innerHTML = ''
        // found.forEach(function (item) {
        //   builder
        //     .create('li')
        //     .setText(`${item.name} , ${item.phone}`)
        //     .appendTo(foundList.returnTagElement())
        // })
        for (let item of found) { // without "let" it throws an error
          builder
            .create('li')
            .setText(`${item.name} , ${item.phone}`)
            .appendTo(foundList.returnTagElement())
        }
      })

    const cancellButtonSearchPanel = builder
      .create('button')
      .setText('cancell')
      .appendTo(searchPanel.returnTagElement())
      .setOnClick(() => {
        searchPanel.hide()
      })

    const addPanel = builder
      .create('div')
      .setId('add-panel')
      .appendTo(phoneBookContainer)
      .hide()

    const nameInput = builder
      .create('input')
      .setType('text')
      .setPlaceholder('Enter a Name')
      .appendTo(addPanel.returnTagElement())

    const numInput = builder
      .create('input')
      .setType('text')
      .setPlaceholder('Enter a Number')
      .appendTo(addPanel.returnTagElement())

    const saveButton = builder
      .create('button')
      .setText('Save')
      .appendTo(addPanel.returnTagElement())
      .setOnClick(() => {
        const nameInputTag = nameInput.returnTagElement()
        const numInputTag = numInput.returnTagElement()
        const name = nameInputTag.value
        const phone = numInputTag.value

        if (name && phone) {
          const {phoneBook} = this
          const contactRecord = phoneBook.add(name, phone)
          console.log(phoneBook.records)
          const contact = builder
            .create('li')
            .setText(`${name} , ${phone}`)
            .appendTo(contactsList.returnTagElement())

          const xButton = builder
            .create('button')
            .setText('x')
            .appendTo(contactsList.returnTagElement())
            .setOnClick(() => {
              phoneBook.remove(contactRecord)
              console.log(phoneBook.records)
              contactsList.returnTagElement().removeChild(contact.returnTagElement())
              contactsList.returnTagElement().removeChild(xButton.returnTagElement())
            })
          nameInputTag.value = null
          numInputTag.value = null
        }
      })

    const cancellButtonAddPanel = builder
      .create('button')
      .setText('cancell')
      .appendTo(addPanel.returnTagElement())
      .setOnClick(() => {
        addPanel.hide()
      })

    const contactsList = builder
      .create('ul')
      .appendTo(phoneBookContainer)

    const foundList = builder
      .create('ul')
      .appendTo(phoneBookContainer)
  }

}

const app = new PhoneBookApp()
app.init()

// const phoneBook = new PhoneBook()

// const a1 = phoneBook.add('a', '1')
// const b = phoneBook.add('b', '2')
// const c = phoneBook.add('c', '3')
// const a2 = phoneBook.add('abc', '123')

// // console.log(phoneBook.records)

// phoneBook.remove(a2)

// console.log(phoneBook.records)

// // const found = phoneBook.search('a')
// // console.log(found)