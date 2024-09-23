var a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var b = [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1];
var c = [];

for(var j = 0; j <= 10; j++) {
    c[j] = a[b[j]];
}

console.log("c = " + c);