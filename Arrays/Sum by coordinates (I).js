var a = [2, 3, 4, 5, 9, 8, 3];
var b = [1, 2, 3, 4, 5, 6, 7];
var c = [1, 1, 1, 4, 4, 4, 6];
var l = a.length - 1;

for(var k = 0; k <= l; k++) {
    c[k] = a[c[k]] + b[k];
}

console.log("c = " + c);