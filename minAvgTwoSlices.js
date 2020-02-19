// given an array, give the location of the beginning average of slices
let A = [4,2,1,2,1,6,6,2,2];

function solution(A){
  let avg2;
  let avg3;
  let position = 0;
  let minVal = (A[0]+A[1])/2;
  // itera sobre cada item e cria array de médias
  for (let i = 0;i<A.length-1;i++){
    avg2 = (A[i]+A[i+1])/2;
    if(A[i+2]){
      avg3 = (A[i]+A[i+1]+A[i+2])/3;
    }
    if(avg2<minVal){
      minVal = avg2;
      position = i;
    } else if (avg3 <minVal){
      minVal = avg3;
      position = i;
    }
  }
  return position
}


solution(A);
