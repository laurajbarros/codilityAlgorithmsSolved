// check if array is a permutation
//  a permutation is when an array has a sequence of numbers (from i to n), and none is missing


// array -> boolean (0,1)
// gets an array,

// if (A[2] == undefined) {
//   let exception = checkForExceptions(A);
//   return exception
// }

let A = [100000000];

function Solution(A){
  if(A.length == 0){
    return 0
  }
  let object = convertToObject(A);
  let starter = object.max - (object.length-1);
  for(var i = starter; i < object.max; i++){
    if(object[i] == null || object[1] == null){
      return 0 ;
    }
  }
  return 1
}



function convertToObject(array){
  let max = array.reduce(function(a,b){
    return Math.max(a,b);
  })
  let obj = {max:max, length:array.length};
  for(let i=0;i<array.length;i++){
    obj[array[i]] = 1;
  }
  return obj
}
Solution(A);
