// A = 1, C = 2, G = 3, T = 4
// S = String of DNAs
// P starter e Q ender.
// M é a quantidade de dados em P e Q (quantidade de queries a serem feitas)


// Array, String
let S = "CAGCCTA";
let P = [1,0,2];
let Q = [2,6,4];

// S vira [ 2, 1, 3, 2, 2, 4, 1 ]
// prefixSum [2,3,6,8,10,14,15];

//  se eu pegar o primeiro caso P e Q -> 1 e 2, seriam os valores 1 e 3, o prefix sum me ajuda em algo?

function solution (S, P, Q){
  let stringAsArray = convertToArrayOfValues(S);
  let arrayMinimum = new Array(P.length).fill(0);
  for(i = 0;i<P.length;i++){
    let minVal = checkWhatIsSmaller(stringAsArray,P,Q,i);
    arrayMinimum[i] = minVal;
  }
  return arrayMinimum;
}


function checkWhatIsSmaller(S,P,Q,i){
  let slicedArr = S.slice(P[i],Q[i]+1);
  let minValue = slicedArr[0];
  for (let i = 1;i<slicedArr.length;i++){
    if(slicedArr[i] == 1){
      return 1
    }
    if(slicedArr[i] < minValue){
      minValue = slicedArr[i];
    }
  }
  return minValue;
}

function convertToArrayOfValues(S){
  let arrayOfValues = [];
  for (let i = 0; i<S.length;i++){
    switch (S[i]){
      case "A":
        arrayOfValues[i] = 1;
        break;
      case "C":
        arrayOfValues[i] = 2;
        break;
      case "G":
        arrayOfValues[i] = 3;
        break
      case "T":
        arrayOfValues[i] = 4;
        break
    }
  }
  return arrayOfValues;
}


solution(S,P,Q);
