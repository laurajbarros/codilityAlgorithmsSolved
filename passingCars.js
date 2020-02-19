// prefix Sum is a method of calculating sum of ranges in an array
// You do it by adding once the array number by number (as a sum of costs)
// Example: A = [1,2,3,4,5] prefix array = [1,3,6,10,15], so to calculate sum from i 1 to i 4 you take the prefix of the last minus
// number of the first: i4 = 15 - i0 = 1, so the sum = 14



// Count the number of passing cars on the road.

// Array = > number
//  [0,1,0,1,1]
//  5 pairs: (0,1) (0,3), (0,4), (2,3) (2,4)
// maybe an array with a fix number of ones to the right?
// [3,0,2,0,0]

// 3,0,5,0,0

// conta quantos tem pra direita e já soma em cada posição:
// [3,3,5,5,5]

// quando estou na posição 0, somo o que tem pra direita do 1 ao 4 (3)
// quando estou na posição 2, somo o que tem pra direita do 2 ao 4 - o que vem antes (na posição 1 que é 1)
let A = [0,0,0,0,1,0,1];

function solution(A){
  let len = A.length-1;
  let summedArray = getPrefixSum(A).Arr;
  let positionOfZeros = getPrefixSum(A).positionOfZeros;
  let crossings = 0;
  let maxNumber = summedArray[len];
  for(let i = 0;i<positionOfZeros.length;i++){
    crossings = crossings + maxNumber - summedArray[positionOfZeros[i]];
  }
  return crossings
}


function getPrefixSum(A){
  let result = {
    Arr : new Array(A.length).fill(0),
    positionOfZeros: []
  };
  for (let i = 1;i<A.length;i++){
      if(A[i] == 1){
        result.Arr[i] = result.Arr[i-1] + 1;
      } else{
        result.Arr[i] = result.Arr[i-1];
        result.positionOfZeros.push(i);
      }
  }
  result = pushZeroToArray(A,result);
  return result;

}

function pushZeroToArray(A, result){
  if (A[0]==0){
    result.positionOfZeros.push(0);
  }
  return result
}

solution(A);
