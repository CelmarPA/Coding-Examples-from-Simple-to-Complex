let a = [5, 2, 8, 4, 6, 12, 8, 9];

let m = 10;
let t = [];
let n = a.length;
let max = Math.max.apply(null, a);

for (let j = 0; j < m; j++) {
    t[m - j - 1] = [];

    for (let i = 0; i < n; i++) {
        f = Math.floor((m / max) * a[i]);
        t[m - j - 1][i] = '\u2591';
        if (j < f) {
            t[m - j - 1][i] = '\u2593';
        }
    }
}

console.log(SMC(t));

function SMC(m) {
    let r = '';
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            r += m[i][j];
        }
        r += "\n";
    }
    return r;
}