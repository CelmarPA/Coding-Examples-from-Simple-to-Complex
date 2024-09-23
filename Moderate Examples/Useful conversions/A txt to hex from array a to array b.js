// txt to hex from array a to array b element correspondence

let a = ".~ text".split("");
let b = [];

for (let i = 0; i < a.length; i++) {
    b[i] = a[i].charCodeAt(0).toString(16);
    b[i] = b[i].length < 2 ? "0" + b[i] : b[i];
}

console.log(b);
