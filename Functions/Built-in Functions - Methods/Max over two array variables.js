var a = [6, 7, 1, 9];
var b = [2, 5, 1, 1];
var maxA = Math.max.apply(null, a);
var maxB = Math.max.apply(null, b);
var max = Math.max(maxA, maxB);

console.log(max);