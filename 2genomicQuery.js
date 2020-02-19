// Solução do Bruinho: localização de cada tipo de genoma
// A == 1
// C == 2
// G == 3
// T == 4

let S = "CAGCCTA";
let P = [1,0,2];
let Q = [2,6,4];

function Solution(S, P, Q){
  let lastSeenA = new Array(S.length).fill(-1);
  let lastSeenC = new Array(S.length).fill(-1);
  let lastSeenG = new Array(S.length).fill(-1);
  let lastSeenT = new Array(S.length).fill(-1);
  for (let i = 0;i<S.length;i++){
    locationToGenome(S,lastSeenA,"A",i);
    locationToGenome(S,lastSeenC,"C",i);
    locationToGenome(S,lastSeenG,"G",i);
    locationToGenome(S,lastSeenT,"T",i);
  }
  let solution = new Array (Q.length).fill(0);

  for(let j = 0;j<Q.length;j++){
    if (lastSeenA[Q[j]]>=P[j]){
      solution[j] = 1;
    } else if(lastSeenC[Q[j]]>= P[j]){
      solution[j] = 2;
    } else if(lastSeenG[Q[j]]>= P[j]){
      solution[j] = 3;
    } else{
      solution[j] = 4;
    }
  }
  console.log(solution);
}
// for (let j = 0; j<Q.length;j++){
//   if(Q[j] -lastSeenA[Q[j]]>=1){
//     solution[j] = 1;
//   } else if (Q[j] -lastSeenC[Q[j]]>=1) {
//     solution[j] = 2;
//   } else if (Q[j] -lastSeenG[Q[j]]>=1) {
//     solution[j] = 3;
//   } else {
//     solution[j] = 4;
//   }
// }




function locationToGenome(S,last_seen,genome,i){
  if(S[i] == genome){
    last_seen[i] = i;
  } else{
    last_seen[i] =last_seen[i-1];
  }
}


Solution(S,P,Q);
