// convert array to object, numbers as keys
// iterate and find missing one
// array number

let array = [];
function Solution(A){
  if (A[2] == undefined) {
    let exception = checkForExceptions(A);
    console.log(exception);
    return exception
  }
  let object = convertToObject(A);
  let starter = object.max - object.length;
  for(var i = starter; i < object.max; i++){
    if(object[i] == null){
      return(i);
    }
  }
}

function checkForExceptions(A){
  if (A.length == 0){
    return 0
  } else if (A.length == 1) {
    return A[0]+1
  } else if (A.length == 2){
    console.log(A[1]+1)
    return A[1]+1
  } else {
    return A
  }
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

Solution(array);
