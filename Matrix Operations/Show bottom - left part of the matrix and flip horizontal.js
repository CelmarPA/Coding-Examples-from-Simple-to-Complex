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
    for(let j =0; j < i + 1; j++) {
        d[i][j] = a[i][i - j];
        r += d[i][j] + ' ';
    }
    r += "\n";
}

console.log(r);

// d[0][0] = 1

// d[1][1] = 6
// d[1][0] = 5

// d[2][2] = 1
// d[2][1] = 0
// d[2][0] = 9

// d[3][3] = 6
// d[3][2] = 5
// d[3][1] = 4
// d[3][0] = 3