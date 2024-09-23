// intermitent melting

let a = [1, 2, 3, 4, 5, 6, 7];
let b = [2, 2, 2, 2, 2, 2, 2];
let l = a.length - 1;

for(let k = 0; k < l; k++) {
    k++;
    a[k] = a[k] + b[k];
    b[k] = a[k];
}

console.log("a = " + a);
console.log("b = " + b);