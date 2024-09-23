let a = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

let b = [
        [0, 0, 1],
        [1, 1, 0],
        [0, 0, 1]
        ];

let n = a.length;
let m = a[0].length;

let r = 0;

for(var i = 0; i < n; i++) {
    for(var j = 0 ; j < m; j++) {
        if(b[i][j] === 1) {
            r += a[i][j];
        }
    }
}

console.log(r);