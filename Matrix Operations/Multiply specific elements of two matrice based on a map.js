var a = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

var b = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
        ];

var c = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

let n = a.length;
let m = a[0].length;
let r = '';

for(var i = 0; i < n; i++) {
    r += '\n';
    for(var j = 0; j < m; j++) {
        if(b[i][j] === 1) {
            c[i][j] = a[i][j] * c[i][j];
        }
        r += c[i][j] + ' ';
    }
}

console.log(r);