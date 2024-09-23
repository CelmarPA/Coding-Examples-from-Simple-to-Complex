let a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];

let d = 0;

let n = a.length;
let m = a[0].length;

for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
        d += a[i][m - j - 1];
        console.log(a[i][m - j - 1]);
        i++;
    }
}

console.log("---\n" + d);

/*

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
    d += a[i][m - j - 1];
    console.log(a[i][m - j - 1]);
    i++;
}

console.log("---\n" + d);

*/