let a = [
        [1.0, 0.0, 0.0, 0.0],
        [0.5, 0.0, 0.5, 0.0],
        [0.0, 0.5, 0.0, 0.5],
        [0.0, 0.0, 1.0, 0.0]
        ];

let v = [
        [0, 0, 0, 1],
        [0, 0, 0, 0]
        ];

let c = 5;
let n = a.length;
let m = a[0].length;

for (let k = 1; k <= c; k++) {

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            v[1][j] += (v[0][i] * a[i][j]);

            // console.log(i + "|" + j + "-" + a[i][j]);
            // console.log(i + "|" + j + "-" + v[0][j]);
        }
    }

    for (let i = 0; i <= n; i++) {
        v[0][i] = v[1][i];
        v[1][i] = 0;
    }

    console.log("k("+ k + ") = [" +
        v[0][0] + ", " + v[0][1] + ", " +
        v[0][2] + ", " + v[0][3] + "]");
}