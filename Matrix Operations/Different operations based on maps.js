// Perform different operations between the values of the homologous elements
// of two arrays based on a map/model (third array)

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
let r = '';

for(let i = 0; i < n; i++) {
    r += '\n';
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
        
        r += c[i][j] + " ";
    }
}

console.log(r);