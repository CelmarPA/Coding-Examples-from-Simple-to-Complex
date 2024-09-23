var a = [];
var b = [];
var c = [];

for(var j = 0; j <= 10; j++) {
    a[j] = j;
    b[j] = 10 - j;
    c[j] = a[j] + b[j] - 10; 
}

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);