let a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];

let d = 0;

let n = a.length;
let m = a[0].length;

let i = 0;

for(let j = 0; j < m; j++) {
    d += a[i][j];
    console.log(a[i][j]);
    i++;
}

console.log("---\n" + d);