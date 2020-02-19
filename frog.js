// A frog wants to go from X to Y, and it jumps distance is D, how many jumps will it take?

function solution(X, Y, D) {
    let dif = Y-X;
    let numberOfJumps = Math.ceil(D/dif);
    return numberOfJumps

}


solution (10,85,30);
