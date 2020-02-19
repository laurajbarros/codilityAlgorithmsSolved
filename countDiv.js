

let A = 6;
let B = 34;
let K = 35;

function Solution(A,B,K){
  let min = Math.ceil(A/K);
  let max = Math.floor (B/K);
  let countOfIntegers = max - min + 1;
  if (countOfIntegers == null){
    return 0
  }
  console.log(countOfIntegers)

}
Solution(A,B,K);
