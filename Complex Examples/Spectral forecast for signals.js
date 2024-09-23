// Spectral forecast for signals in JavaScript

var A = "10.3, 23.4, 44.8, 63.2, 44.1, 35.1, 46.5, 62.6, 50.4";
var B = "18.8, 43.1, 52.2, 45.5, 46.8, 46.6, 67.9, 66.3, 70.4";
var M = "";

var tA = [];
var tB = [];

var tA = A.split(",");
var tB = B.split(",");

var maxA = Math.max.apply(null, tA);
var maxB = Math.max.apply(null, tB);

var max = Math.max(maxA, maxB);

var d = 33;

for (var i = 0; i < tA.length; i++) {
    var v = ((d / maxA) * tA[i]) + (((max - d) / maxB) * tB[i]);
    M += v.toFixed(2);
    if (i < tA.length - 1) {
        M += ", ";
    }
}

console.log("Signal A: " + A);
console.log("Max(A[i]): " + maxA);
console.log("Signal M: " + M);
console.log("Signal B: " + B);
console.log("Max(B[i]): " + maxB);
