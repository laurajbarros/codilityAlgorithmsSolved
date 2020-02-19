// Compute number of different values in array

let A = [1,1,1,1,1,1,1,2];
function solution(A){
  let values = {};
  let count = 0;
  A.forEach(function(item,i){
    if(values[item] == null){
      count++;
      values[item] = "true";
    }
  });
  return count;
}



solution(A);
