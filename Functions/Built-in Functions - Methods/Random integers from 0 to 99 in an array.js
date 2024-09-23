let a = [];
let n = 10;

for(let k = 0; k < n; k++) {
    a[k] = Math.floor(Math.random() * 100);
}

max = Math.max.apply(null, a);

console.log(a);
console.log("Maximum = " + max);