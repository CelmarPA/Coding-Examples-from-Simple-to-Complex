var a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var b = [];

for(var j = 0; j <= 10; j++) {
    b[j] = a[j] % 3;
}

console.log("b = " + b);