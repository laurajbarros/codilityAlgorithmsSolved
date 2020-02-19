// Find the smallest positive integer that does not occur in a given sequence.
// smallest positive integer (greater than 0) that does not occur in A.


// array => number
// convert to object
// start in 1 and start checking

let A = [1, 3, 6, 4, 1, 2]
function solution(A){
  if (checkIfEmpty(A)){
    return 1
  }
  let obj = convertToObject(A);
  if (checkIfOneExists(obj)){
    return 1
  }
  for(var i = 2; i < obj.max; i++){
    console.log(obj[i]);
    if(obj[i] == null){
      return(i);
    }
  }
  return obj.max + 1
}

function checkIfOneExists(obj){
  if (obj[1]== undefined || Object.keys(obj).length == 0){
    return true
  }
  return false
}

function checkIfEmpty(A){
  if (A.length == 0){
    return true
  }
  return false
}

function convertToObject(A){
  let max = A.reduce(function(a,b){
    return Math.max(a,b);
  });
  let newObject = {};
  newObject.max = max;
  for (let i = 0;i<A.length;i++){
    newObject[A[i]] = 1;
  }
  return newObject;
}

solution(A);
