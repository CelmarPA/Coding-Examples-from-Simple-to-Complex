let a = [
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2]
        ];

let b = [
        [1, 1, 0, 0, 0],
        [3, 1, 0, 0, 1],
        [1, 3, 0, 1, 1],
        [0, 0, 0, 7, 0],
        [3, 0, 4, 0, 9]
        ];

let c = [
        [3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3],
        [3, 3, 3, 3, 1]
        ];

let n = a.length;
let m = a[0].length;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {

        if(b[i][j] === 0) { c[i][j] = a[i][j] * c[i][j]; }
        if(b[i][j] === 1) { c[i][j] = a[i][j] + c[i][j]; }
        if(b[i][j] === 2) { c[i][j] = a[i][j] - c[i][j]; }
        if(b[i][j] === 3) { c[i][j] = c[i][j] - a[i][j]; }
        if(b[i][j] === 4) { c[i][j] = a[i][j] % c[i][j]; }
        if(b[i][j] === 5) { c[i][j] = a[i][j] / c[i][j]; }
        if(b[i][j] === 6) { c[i][j] = a[i][j]; }
        if(b[i][j] === 7) { c[i][j] = '#'; }
        if(b[i][j] === 8) { /* do stuff */ }
        if(b[i][j] === 9) { if(c[i][j] < a[i][j]) {c[i][j] = a[i][j];} }
    }
}

console.log(SMC(c));

function SMC(m) {
    var r = '\n'
    for(var i = 0; i < m.length; i++) {
        for(var j = 0; j < m[i].length; j++) {
            r += m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}