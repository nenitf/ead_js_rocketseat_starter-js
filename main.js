var link = document.createElement('a')
link.setAttribute('href', 'http://neni.dev')
link.setAttribute('title', 'portfólio dev')

var text = document.createTextNode('Acessar meu site')
link.appendChild(text)

// add link ao body
var container = document.querySelector('body')
container.appendChild(link)

// remove btn do body
var btn = document.querySelector('#btn')
container.removeChild(btn)
