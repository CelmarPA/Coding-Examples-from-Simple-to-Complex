// Find complementary matrix by using stochastic means (uniform distribution)

let a = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];

let b = [];

console.log(SMC(mutate(a)));

function mutate(a) {
    let n = a.length;
    let m = a[0].length;
    let q = 200;
    let s = 0; // score

    for (let k = 0; k < q; k++) {
        s = 0;

        for (let i = 0; i < n; i++) {
            b[i] = [];

            for (let j = 0; j < m; j++) {
                b[i][j] = Math.round(Math.random(), 0);

                if (b[i][j] !== a[i][j]) {
                    s += 1;
                }
            }

            if (s >= m * n) {
                return b;
            }
        }
    }
    return "Not found by random means.";
}

function SMC(m) {
    r = "";
    if (typeof(m) === "string") {
        return (r += m);
    } else {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                r += m[i][j] + " ";
            }
            r += "\n";
        }
        return r;
    }
}
