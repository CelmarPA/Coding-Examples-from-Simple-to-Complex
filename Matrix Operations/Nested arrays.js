var A = ["a", "b", "c"];
var B = ["d", "e", "f"];
var C = ["g", "h", "i"];

var D = [A, B, C];
var E = [B, C, A];
var F = [C, B, A];

var G = [D, E, F];

console.log(A[0]);
console.log(D[0]);
console.log(G[0]);