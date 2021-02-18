
const [h1] = document.getElementsByTagName('h1')
const [h2] = document.getElementsByTagName('h2')
const [div] = document.getElementsByTagName('div')
const [input] = document.getElementsByTagName('input')
const [p] = document.getElementsByTagName('p')
const [button] = document.getElementsByTagName('button')

let h3 = document.createElement('h3')
h3.textContent = 'This is h3'
let h4 = document.createElement('h4')
h4.textContent = 'This is h4'

// h1.style.color = 'red'

h2.id = 'h2-id'

div.setAttribute('id', 'container')

div.appendChild(h3)

// document.body.replaceChild(h4, h1)
// div.replaceChild(h4, h3)
// div.removeChild(h4)

// div.innerHTML = '<h1>Helllloooo!</h1>'
// document.write('<h1>Helllloooo!</h1>')

function buttonClickHandle() {
    h1.style.color = 'red'
    // h1.style.color === 'red'? h1.style.color = 'blue' : h1.style.color = 'red'
}

function buttonClickHandle2() {
    h2.style.color = 'red'
}

function buttonClickHandle3() {
    h3.style.color === 'red'? h3.style.color = 'blue' : h3.style.color = 'red'
}

h3.addEventListener('mouseover', buttonClickHandle3)
h3.addEventListener('mouseout', buttonClickHandle3)

button.addEventListener('click', function() {
    h3.removeEventListener('mouseover', buttonClickHandle3)
    h3.removeEventListener('mouseout', buttonClickHandle3)
    console.log('button was clicked')
})

div.addEventListener('click', function() {
    console.log('div was clicked')
}, true)

// button.onclick = buttonClickHandle
// button.onclick = buttonClickHandle2

// button.addEventListener('click', buttonClickHandle)
// button.addEventListener('click', buttonClickHandle2)

// button.onmouseover = buttonClickHandle
// button.onmouseout = buttonClickHandle2