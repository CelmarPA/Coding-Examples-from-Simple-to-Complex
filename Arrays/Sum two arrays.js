var a = [2, 3, 4, 5, 9, 8, 3];
var b = [1, 2, 3, 4, 5, 6 ,7];
var c = [];
var l = a.length - 1;

for(var k = 0; k <= l; k++) {
    c[k] = a[k] + b[k];
}

console.log("c = " + c);