let m = [
        [2, 4, 4],
        [3, 5, 6],
        [3, 5, 4]
        ];

let a = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        ];

for(let i = 0; i < m.length; i++) {
    for(let j = 0; j < m[0].length; j++) {

        // if(!a[0][j]) { a[0][j] = 0; }
        // if(!a[1][i]) { a[1][i] = 0; }
        if(!a[2][j]) { a[2][j] = 10000; }
        if(!a[3][i]) { a[3][i] = 10000; }

        if(a[0][j] < m[i][j]) { a[0][j] = m[i][j]; }
        if(a[1][i] < m[i][j]) { a[1][i] = m[i][j]; }

        if(a[2][j] > m[i][j]) { a[2][j] = m[i][j]; }
        if(a[3][i] > m[i][j]) { a[3][i] = m[i][j]; }
    }
}

console.log("C max = " + a[0]);
console.log("R max = " + a[1]);
console.log("C min = " + a[2]);
console.log("R min = " + a[3]);