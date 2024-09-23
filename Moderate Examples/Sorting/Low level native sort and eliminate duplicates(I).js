let a = [];
let b = [3, 6, 2, 78, 99, 1, 4];

let r = 0;
let n = b.length;

for (let i = 0; i < n; i++) {
    a[b[i]] = b[i];
}

let m = a.length; // max val

for (let j = 0; j < m; j++) {
    if (a[j]) {
        b[r] = a[j];
        r++;
    }
}

console.log(b);
