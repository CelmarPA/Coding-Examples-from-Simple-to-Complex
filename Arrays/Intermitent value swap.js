let a = ["a", "a", "a", "a", "a", "a"];
let b = ["b", "b", "b", "b", "b", "b"];
let l = a.length - 1;

for(let k = 0; k <= l; k++) {
    k++;
    t = a[k];
    a[k] = b[k];
    b[k] = t;
}

console.log("a = " + a);
console.log("b = " + b);