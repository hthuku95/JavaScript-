/*
console.dir(document)
console.dir(document.URL)
console.dir(document.title)
console.dir(document.body)
console.dir(document.head)
console.dir(document.doctype)

document.title = "hto";
console.dir(document.all)
//console.log(document.all[10])
console.dir(document.forms[0])
console.dir(document.images)
console.dir(document.links)

var headerTitle = document.getElementById('header-title')
console.log(headerTitle)
console.log(headerTitle.textContent[0])
var header = document.getElementById('main-header')
header.style.boxShadow = '0px 0px 0px 3px #000';
console.log(header)
/*
headerTitle.innerText = "Hello World";
headerTitle.innerHTML = "<h3>Brooooo</h3>";
headerTitle.innerHTML = "<h3>Siiiiiiiiiiiiz</h3>";
headerTitle.textContent = "Of Course I love, You God Speed..."
console.log(headerTitle)**/
/*
var items = document.getElementsByClassName('list-group-item')
items[1].style.backgroundColor = 'yellow'

for(var i = 0; i < items.length ; i++){
    items[i].style.backgroundColor = '#d4d4d4'
}
/*
var oddlists = document.querySelector('.list-group-item:nth-child(odd)')
oddlists.style.color = 'yellow'

var evenlists = document.querySelector('.list-group-item:nth-child(even)')
evenlists.style.color = 'green'
*/
/*
//Changing background color of the lists to different shades of grey
var odd = document.querySelectorAll('li:nth-child(odd)')
for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#ddd'
}

var even = document.querySelectorAll('li:nth-child(even)')
for(var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = '#eee'
}
*/
/*
var itemlist = document.querySelector('#items')
itemlist.children[0].style.backgroundColor= 'yellow'

for (let i = 0; i < itemlist.children.length; i++) {
    itemlist.children[i].style.backgroundColor = '#ddd444'
    itemlist.children[i].style.color = '#fff'
}

var newDiv = document.createElement('div')

newDiv.className = 'content'
newDiv.id = 'hello-world'

console.log(newDiv)

itemlist.appendChild(newDiv)
newDiv.innerHTML = "<button>Add More Items</button>"
newDiv.children[0].className = 'btn btn-primary btn-block'
newDiv.children[0].style.backgroundColor= 'green'
*/

var changeHeader = (e)=>{
    var x = document.getElementsByClassName('card-body')
    var y = document.getElementById('main-header')
    if (e.shiftKey == false) {
        y.textContent = 'The color of the form Changed. refresh the page to return to the original state'
        x[0].style.backgroundColor = '#ddd444'
    } else {
        console.log(x[0])
        console.log(e.offsetX)
    }
}

var button = document.getElementById('button')
button.addEventListener('dblclick',changeHeader)
button.addEventListener('click',buttonClick)
function buttonClick(e){
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.altKey)
    console.log(e.shiftKey)
    console.log(e.ctrlKey)
}
