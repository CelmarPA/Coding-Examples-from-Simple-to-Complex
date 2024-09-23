let a = [5, 1, 8, 4, 6, 2, 9, 8];

console.log(p(a));

function p(a) {
    let max = Math.max.apply(null, a);
    let n = a.length;
    let m = 100;
    let t = [];

    for (let i = 0; i < n; i++) {
        t[i] = (m / max) * a[i]
        t[i] = Math.round(t[i]) + '%';
    }

    return t;
}