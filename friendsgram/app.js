const followers = document.querySelector('#normal-friends')
const closeFriends = document.querySelector('#close-friends')

class App {
  constructor(requestResult, tagName) {
    this.tagName = tagName
    this.normalFriends = requestResult
  }

  static closeFriends = []

  setAsClosefriend(normalFriend) {
    let index = App.closeFriends.indexOf(normalFriend)
    if (index === -1) {
      App.closeFriends.push(normalFriend)
      this.render(closeFriends, App.closeFriends)
    }
  }

  removeAsCloseFriend(closeFriend) {
    let index = App.closeFriends.indexOf(closeFriend)
    if (index !== -1) {
      App.closeFriends.splice(index, 1)
      this.render(closeFriends, App.closeFriends)
    }
  }

  block(friend) {
    let index1 = this.normalFriends.indexOf(friend)
    let index2 = App.closeFriends.indexOf(friend)
    this.normalFriends.splice(index1, 1)
    index2 >= 0 && App.closeFriends.splice(index2, 1)
    this.render()
    this.render(closeFriends, App.closeFriends)
  }

  render(tag = this.tagName, friendsList = this.normalFriends) {
    tag.innerHTML = ''
    friendsList.forEach(e => {

      const cardContainer = document.createElement('div')
      cardContainer.setAttribute('class', 'card-container')
      cardContainer.innerHTML = `
      <img class="round" src=${e.picture.large} alt="user" />
      <h3>${e.name.first} ${e.name.last}</h3>
      <h6>${e.location.state}</h6>
      <p>Age: <span>${e.dob.age}</span></p>
      <p>Phone: <span>${e.phone}</span></p>`

      const buttonsDiv = document.createElement('div')
      const button1 = document.createElement('button')
      const button2 = document.createElement('button')

      buttonsDiv.setAttribute('class', 'buttons')
      button1.setAttribute('class', 'primary')
      button2.setAttribute('class', 'primary ghost')
      button1.textContent = 'Close Friend'
      button2.textContent = 'Block'

      cardContainer.appendChild(buttonsDiv)
      buttonsDiv.appendChild(button1)
      buttonsDiv.appendChild(button2)
      tag.appendChild(cardContainer)

      button1.addEventListener('click', () => {
        this.setAsClosefriend(e)
      })

      button2.addEventListener('click', () => {
        this.block(e)
      })

      if (tag === closeFriends) {
        button1.textContent = 'Not Close'
        button1.style.backgroundColor = 'orange'
        button1.classList.add('inside-close')
        button1.onclick = () => {
          this.removeAsCloseFriend(e)
        }
      }
    })
  }

  request() {
    fetch('https://randomuser.me/api/?results=10&nat=ir')
      .then( response => response.json())
      .then( data => {
        let requestResult = data.results
        let app = new App(requestResult, followers)
        app.render()
      })
  }

  static launch() {
    const getButton = document.querySelector("#get-button")
    getButton.addEventListener('click', this.prototype.request)
  }
}

App.launch()
