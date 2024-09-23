// Function to swap diagonal of matrix

let a = [
        [3, 1, 2],
        [1, 0, 1],
        [2, 1, 3]
        ];

swapDiagonal(a);
console.log(SMC(a));

function swapDiagonal(a) {
    let n = a.length;

    for (let i = 0; i < n; i++) {
        let t = a[i][i];
        a[i][i] = a[i][n - i - 1];
        a[i][n - i - 1] = t;
    }
}

function SMC(m) {
    let r = "\n";
    for (let i = 0 ; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            r += " " + m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}