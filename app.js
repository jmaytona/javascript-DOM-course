/*1st Topic
    -Get elements by class or tag name
    -Calling classname by array
    -Looping thru all the classes*/


/*var form = document.getElementsByTagName('form');

console.log(form);

var titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item){
               console.log(item);
               })*/


/*2nd Topic 
-Query Selector*/

/*const wrap = document.querySelector('#wrapper');

console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');

console.log(wmf);

var books = document.querySelector('#book-list li .name');

console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book) {
                          console.log(book);
                          })*/


/*3rd Topic
-Changing Text and HTML Content*/

/*
var books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach(function(book) {
    book.textContent += ' (book title)';
})

var cTitle = document.getElementsByClassName('title');

Array.from(cTitle).forEach(function(title) {
    title.textContent = 'Changed Title!';
})

var button = document.getElementsByTagName('button');

Array.from(button).forEach(function(but) {
    but.innerHTML += ' button';
})

var bookTitle = document.querySelector('#book-list h2');

    bookTitle.innerHTML = '<button>Click Me!</button>';
*/


/*4th Topic Node
-Checking Node Type and Name
-Cloning Nodes*/

/*const wrapper = document.querySelector('#wrapper');

console.log('#wrapper node type is: ', wrapper.nodeType);
console.log('#wrapper node name is: ', wrapper.nodeName);
console.log('#wrapper has child node: ',wrapper.hasChildNodes());

const clonedWrapper = wrapper.cloneNode(true);

console.log(clonedWrapper);*/


/*5th Topic Traversing the DOM*/

/*To Parent*/
/*const booklist = document.querySelector('#book-list');

console.log('the parent node of #book-list is: ', booklist.parentNode);
console.log ('the parent elemet of #book-list is: ', booklist.parentElement);
console.log('the parent of parent node of #book-list is: ', booklist.parentNode.parentNode);*/

/*To Child*/
/*console.log(booklist.childNodes);
console.log(booklist.children);*/

/*To Siblings*/

/*console.log('This is the next sibling: ', booklist.nextSibling);
console.log('This is the next Element sibling: ', booklist.nextElementSibling);

console.log('This is the previous sibling: ', booklist.previousSibling);
console.log('This is the previous Element sibling: ', booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML += '<br>There you go!';*/


/*6th topic Event*/

/*var event = document.querySelectorAll('#book-list .delete')

Array.from(event).forEach(function(e){
    e.addEventListener('click', function(e){
        
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
        
});*/


/*7th Event Bubbling*/

//Delete

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
})

/*8th Forms*/

//Add Booklist

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //Create Element

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('span');

    //Add Content
    deletebtn.textContent = 'delete';
    bookName.textContent = value;

    //Add Class Name(for Styles)
    deletebtn.classList.add('delete');
    bookName.classList.add('name');

    //Append DOM
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);

});

//Checkbox
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }

});

//Filter Search


const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }
        else {
            book.style.display = 'none';
        }    
    })
})


//Tabbed Content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.owndata);
        
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }
            else {
                panel.classList.remove('active');
            }
        })
    }
})















