//callback pyrimid of doom
const movePlayer = function(dis, dir, callback){
  // debugger;
  alert(`Player moved ${dis} towards ${dir}`);
  console.log(`Player moved ${dis} towards ${dir}`);
  callback();
};

const secondly = name => console.log(`Hola ${name}`);

movePlayer(100, 'Left', function(){
  movePlayer(400, 'Left', function(){      
    movePlayer(10, 'Right', function(){
      movePlayer(330, 'Left', function(){
      });
    })
  });
});

secondly('yuber');

//The same as above but this time using promises.
const mo
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'));




//Create a new promise
new Promise((resolver, rechazar) => {
  console.log('Inicial');

  resolver();
})
.then(() => {
  throw new Error('Algo falló');
      
  console.log(Error);
})
/* .catch(() => {
  console.log('Haz eso');
}) */
.then(() => {
  console.log('Haz esto sin que importe lo que sucedió antes');
});


//movePlayer promise.

const movePlayer = new Promise(
  
);

const multiple = (prob=0) => {
  const flag = Math.random() > prob
  return flag ? 'awesome' : 'nicht awesome'
}

movePlayer()
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'))
