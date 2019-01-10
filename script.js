//callback pyrimid of doom
const movePlayer = function(dis, dir, callback){
  alert(`Player moved ${dis} towards ${dir}`);
  console.log(`Player moved ${dis} towards ${dir}`);
  callback();
};

movePlayer(100, 'Left', function(){
  movePlayer(400, 'Left', function(){      
    movePlayer(10, 'Right', function(){
      movePlayer(330, 'Left', function(){
      });
    })
  });
});

//The same as above but this time using promises.
const movePlayer = (dis, dir) => new Promise((resolve, reject) => {
  console.log(`Player moved ${dis} towards ${dir}`);
  let moved = true;
  if(moved){
    resolve("It worked!");
  }else{
    reject("It went wrong!");
  }
});

movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => {
  // throw new Error('something went wrong!');
  movePlayer(10, 'Right')})
.then(() => movePlayer(330, 'Left'))
.catch(error => console.log(error));

//Create a promise from class: video min 4:39
const promise = new Promise((resolve, reject) => {
  if(true){
    setTimeout(resolve, 30000, 'Stuff worked');
  }
  else{
    reject('Error, it broke');
  }
})

promise.then(result => console.log(result));

console.log(`${5+4}`);