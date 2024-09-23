var a = [2, 3, 4, 5, 9, 8, 3];
var b = [1, 2, 3, 4, 5 ,6, 7];
var l =  a.length - 1;

var max = 0;
var maxA = 0;
var maxB = 0;

for(var k = 0; k <= l; k++) {
    if(a[k] > maxA) { maxA = a[k]; }
    if(b[k] > maxB) { maxB = b[k]; }
    if(maxA > max) { max = maxA; }
    if(maxB > max) { max = maxB; }
}

console.log(max);