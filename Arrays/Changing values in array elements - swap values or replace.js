A = ["a", "b", "c"];

let x = A[1];

A[0] = "d";
A[1] = A[2];
A[2] = x;

console.log(A[0] + A[1] + A[2]);