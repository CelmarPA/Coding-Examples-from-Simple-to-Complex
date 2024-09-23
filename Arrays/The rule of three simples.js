let a = [5, 1, 8, 4, 6, 2, 9, 8];

let n = a.length;
let max = 0;
let m = 100;
let t = [];

for(let i =0; i < n; i++) {
    if(a[i] > max) {
        max = a[i];
    }
}

for(let i = 0; i < n; i++) {
    p = (m / max) * a[i];
    console.log(p + "%");
}