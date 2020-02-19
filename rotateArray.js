
var array = [1,2,3,4,5,6];


function loopArrayNTimes(array,N){

  for (let i = 0;i<N;i++){
   array = loopArray(array)
  }
  console.log(array);
}



function loopArray(array){
  let arrSliced = array.pop();
  array.unshift(arrSliced);
  return array
}

loopArrayNTimes(array,6);
