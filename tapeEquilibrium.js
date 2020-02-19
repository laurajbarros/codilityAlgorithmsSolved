// array com pelo menos 2 números
// Cada elemento vai de -1000 a 1000
//  dividir a array em todas as formas possíveis
// oegar soma da primeira parte menos soma da segunda parte, positivar e depois ver menor valor possível

//  a quantidade de cortes que eu posso dar é arr.length - 1

let array = [1,-60,-100];



function Solution(A){
  let sum = A.reduce((a,b)=> a + b,0);
  let adder = A[0];
  let calculation = [];
  for(let i = 0;i<A.length-1;i++){
    let difference = Math.abs(adder - (sum - adder))
    adder = adder + A[i+1];
    calculation.push(difference);
  }
  console.log(Math.min.apply(null,calculation))
  return Math.min.apply(null,calculation)
}




Solution(array);
// posso fazer objeto{
//   corte1 = [soma 1, soma 2]
// }
