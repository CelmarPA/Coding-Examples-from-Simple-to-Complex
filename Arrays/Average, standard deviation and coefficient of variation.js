let a = [5, 6, 2, 9, 44, 200];
let n = a.length;

let b = 0;
let e = 0;

for(var j = 0; j < n; j++) {
    b += a[j];
}

let x = b / n; // Average

for(var j = 0; j < n; j++) {
    e += Math.pow((a[j] - x), 2);
}

let s = Math.sqrt(e / (n - 1)); // Standard deviation
let c = s / x; // Coefficient of variation

console.log("AV = " + x);
console.log("SD = " + s);
console.log("CV = " + c);