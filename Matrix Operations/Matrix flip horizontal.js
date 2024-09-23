// Flip horizontal

let a = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 1, 2],
        [3, 4, 5, 6]
        ];

let d = [];
let n = a.length;
let m = a[0].length;

let r = '';

for(let i = 0; i < n; i++) {
    d[i] = [];
    for(let j = 0; j < m; j++) {
        d[i][j] = a[i][m - j - 1];
        r += d[i][j] + ' ';
    }
    r += '\n';
}

console.log(r);