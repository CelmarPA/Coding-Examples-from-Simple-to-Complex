let a = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 1, 2],
        [3, 4, 5, 6]
        ];

let ld = 0; // left diagonal
let rd = 0; // right diagonal

let n = a.length;
let m = a[0].length;

let i = 0;

for(let j = 0; j < m; j++) {
    ld += a[i][j];
    rd += a[i][m - j - 1];
    i++;
}

console.log("L = " + ld + " | R = " + rd);