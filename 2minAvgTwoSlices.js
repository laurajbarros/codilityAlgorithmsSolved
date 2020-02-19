// get array of multiple numbers


let A = [1,2,3,5,2,4,6,3,6];
function Solution(A){
  let minVal = (A[0]+A[1])/2;
  let position = 0;
  let arr2 = [];
  let arr3 = [];
  let avg2;
  let avg3;
  for (let i = 0; i<A.length-2;i++){
    avg2 = (A[i]+A[i+1])/2;
    avg3 = (A[i]+A[i+1]+A[i+2])/3
    if(arr2 <= minVal){
      minVal = arr2;
      position = i;
    } else if(arr3<=minVal){
      minVal = arr3;
      position = i;
    }
  }
  console.log(minVal);
  console.log(position);

}

function sumArray(A){
  let result = [A[0]];
  for(let i=1;i<A.length;i++){
      result[i] = result[i-1] + A[i];
  }
  return result
}

Solution(A);
