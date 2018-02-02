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

const wrap = document.querySelector('#wrapper');

console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');

console.log(wmf);

var books = document.querySelector('#book-list li .name');

console.log(books);

books = document.querySelectorAll('#book-list li .name');

console.log(books);

Array.from(books).forEach(function(book) {
                          console.log(book);
                          })