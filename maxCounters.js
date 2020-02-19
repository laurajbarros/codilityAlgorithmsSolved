// N counters
// if Xi = N -> X++
// if Xi = N+1 -> all X -> MaxX

// A => array de somas
// N => Number of counters

let A = [1,4,1,6,2,2,5,6];
let N = 0;

// enters Array and Number of counters =>  array of final value of counters
function Solution(N,A){
  let counters = createCounters(N);
  let maxNumberOnCounter = 0;
  let NPlusOne = N+1;
  for(let i=0;i<A.length+1;i++){
    if(A[i] == NPlusOne){
      counters = maxAlltoMax(N, counters, maxNumberOnCounter);
    } else{
      let addedCounter = addOne(A[i], counters, maxNumberOnCounter);
      counters = addedCounter[0];
      maxNumberOnCounter = addedCounter[1];
    }
  }
  let backToArr = convertBackToArr(counters,N);
  console.log(backToArr);
  return backToArr
}

function convertBackToArr(Obj,N){
  let A = [];
  for(let i = 0; i<N;i++){
    A[i] = Obj[i+1];
  }
  return A
}


function addOne(m,counters,maxNumberOnCounter){
  counters[m] = counters[m]+1;
  if(counters[m] > maxNumberOnCounter){
    maxNumberOnCounter = counters[m];
  }
  return [counters, maxNumberOnCounter];

}

function maxAlltoMax(N, counters,maxNumberOnCounter){
  for (let i=1; i< N+1;i++){
    counters[i] = maxNumberOnCounter;
  }
  return counters
}


function createCounters(N){
  let counters = {};
  for(let i = 1;i<N+1;i++){
      counters[i] = 0;
  }
  return counters;
}


Solution (N,A);
