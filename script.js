//calbacks pyrimid of doom
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left', function(){
        movePlayer(10, 'Right', function(){
            movePlayer(330, 'Left', function(){

            });
        });
    });
});

//The same as above but this time using promises.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
      }, 300);
});

movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'));

//Promises Platzi
var fs = require('fs')

function readFile (name)