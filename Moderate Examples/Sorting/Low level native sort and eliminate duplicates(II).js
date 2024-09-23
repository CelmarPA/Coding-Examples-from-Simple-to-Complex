let a = [];
let b = [3, 6, 2, 78, 99, 1, 4];

let n = b.length;
let r = n;

for (let i = 0; i < n; i++) {
    a[b[i]] = b[i];
}

let m = a.length; // max val

for (let j = m; j > 0; j--) {
    if (a[j]) {
        b[n - r] = a[j];
        r--;
    }
}

console.log(b);
