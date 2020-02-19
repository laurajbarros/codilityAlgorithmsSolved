// A frog wants to cross a river, the side he is it at is 0 and the final position is X+1
 // To get there some leaves will fall in time accordingly to an Array[T]
  // Assuming the leaves won't leave position, when is the earliest it can get to the other side?

  // number, array => number
  // gets a distance and a time in each position and delivers the earliest time it arrives
  // check if sum of counter is => to X (for each step up to x, counter goes to 1, so it sums x)


let X = 6;
let A = [3,3,1,2,3,4,5,4];

function solution(X,A){
  let counter = [];
  let sum = 0;
  let sumTotal = sumOfAll(X);
  for(let i = 0;i< A.length;i++){
    if(counter[A[i]] !== 1){
      let newVar = A[i];
      counter[newVar] = 1;
      sum = sum + newVar;
      if (sum == sumTotal){
        return i
      }
    }
  }
  return -1
}

function sumOfAll(X){
  let sum = 0;
  for (X;X>0;X--){
    sum = X+sum;
  }
  return sum
}

solution(X,A);
// sumOfAll(X);
