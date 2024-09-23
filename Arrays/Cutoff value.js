var a = [2, 3, 4, 5, 9, 8, 3];
var b = [1, 2, 3, 4, 5, 6, 7];
var c = [1, 1, 1, 4, 4, 4, 6];
var l = a.length - 1;

for(var k = 0; k <= l; k++) {
    if(a[c[k]] + b[c[k]] > 5) {
        c[k] = a[c[k]] + b[c[k]];
    } else {
        c[k] = 0;
    }
}

console.log("c = " + c);0