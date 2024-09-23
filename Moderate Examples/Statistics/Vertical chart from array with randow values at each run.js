let a = [];
let n = 9;

for (let k = 0; k < n; k++) {
    a[k] = Math.floor(Math.random() * 100);
}

console.log(SMC(chart(a)));

console.log("\n" + a);

function chart(a) {
    let m = 9;
    let t = [];
    let max = Math.max.apply(null, a);

    for (let j = 0; j < m; j++) {
        t[m - j - 1] = [];
        for (let i = 0; i < n; i++) {
            f = Math.floor((m / max) * a[i]);
            t[m - j - 1][i] = "\u2591";
            if (j < f) {
                t[m - j - 1][i] = "\u2593";
            }
        }
    }
    return t;
}

function SMC(a) {
    let n = a.length;
    let m = a[0].length;
    let r = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i < n) {
                r += a[i][j];
            }
            if (i === n) {
                r += "|";
            }
            if (i > n) {
                r += j + 1;
            }
        }
        if (i == n) {
            r += "\n";
        }
        if (i < n) {
            r += "_" + (n - i) + "\n";
        }
    }

    return r;
}
