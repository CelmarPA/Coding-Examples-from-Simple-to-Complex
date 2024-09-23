// Function to transpose a matrix
let a = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 2, 3],
        [4, 5, 6, 7]
        ];

transpose(a);
console.log(SMC(a));

function transpose(a) {

    let n = a.length;
    let m = a[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < m; j++) {
            let t = a[j][i];
            a[j][i] = a[i][j]; // Swap
            a[i][j] = t;
        }
    }
}

function SMC(m) {
    let r = "\n";
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            r += " " + m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}