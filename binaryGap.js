
function Solution(N){
  let numberBin = intToBin(N);
  let numberBinArray = binToArray(numberBin);
  let arrayOfPositionOnes = checkPositionOnes(numberBinArray);
  let maxBinaryGap = checkMaxZeros(arrayOfPositionOnes);
  console.log(maxBinaryGap);
  return maxBinaryGap
}

//
let checkMaxZeros = (array)=>{
  let diffAr = [];
  for (let i=0; i < array.length-1;i++){
    diffAr.push((array[i+1]-array[i]-1));
  }
  // console.log(diffAr[0]);
  if (diffAr.length > 0){
    let diffArSorted = diffAr.sort();
    let lastPosition = diffArSorted.length - 1;
    return diffArSorted[lastPosition];
  } else{
    return 0
  }
};

// Check position of ones and add position to Array
let checkPositionOnes = (bin) => {
  let positions = [];
  for (let i=0; i < bin.length;i++){
    if(bin[i]=="1"){
      positions.push(i);
    }
  }
  return positions;
}

// Convert number to Binary
let intToBin = (dec)=>{
    let binary = (dec >>> 0).toString(2);
    return binary;
}

// Split Binary to Array;
let binToArray = (binary)=>{
    return (""+ binary).split("");
}

Solution(32);
