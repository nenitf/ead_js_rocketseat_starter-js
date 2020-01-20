console.log(document.getElementById('btn')) // tag
console.log(document.getElementsByTagName('button')[0]) // HTMLCollections[0]

console.log(document.querySelector('body button'))
console.log(document.querySelector('button'))
console.log(document.querySelector('#btn'))

document.querySelector('#btn').onclick = function() {
    console.log(document.querySelector('input').value)
}
