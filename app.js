/*1st Topic
    -Get elements by class or tag name
    -Calling classname by array
    -Looping thru all the classes*/


var form = document.getElementsByTagName('form');

console.log(form);

var titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item){
               console.log(item);
               })