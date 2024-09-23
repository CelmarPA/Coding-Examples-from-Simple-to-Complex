let a = [];

function permute(s, r, l) {
    if (l === r) {
        a.push(s);
    } else {
        for (let i = l; i <= r; i++) {
            s = swap(s, l, i);
            permute(s, r, l + 1);
            s = swap(s, l, i);
        }
    }
}

function swap(s, i , j) {
    let c = s.split("");
    let t = c[i];
    c[i] = c[j]
    c[j] = t;
    return c.join("");
}

let s = "ACTG";
let n = s.length;
permute(s, n - 1, 0);
console.log(a)