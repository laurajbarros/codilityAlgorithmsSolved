// Given an array of numbers, where A.length => N >= 3, get the max product of triplets
// sort by size and get last three numbers -> merge sort


let A = [1,2,-5,3,2,3,2];

function solution(A){
  let sortedArray = mergeSort(A);
  return checkbiggestProduct(sortedArray);
}

function checkIfBiggerNegatives(sortedArray){
  let len = sortedArray.length;
  let firstTwo = sortedArray[0]*sortedArray[1]*sortedArray[len-1];
  let lastTwo = sortedArray[len-3]*sortedArray[len-2]*sortedArray[len-1];
  if(firstTwo>lastTwo){
    return sortedArray[0]*sortedArray[1]*sortedArray[len-1]
  } else{
      return sortedArray[len-1]*sortedArray[len-2]*sortedArray[len-3];
  }
}

function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

solution(A);
