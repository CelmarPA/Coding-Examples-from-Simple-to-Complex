let m = [
        [2, 4, 4],
        [3, 5, 6],
        [3, 5, 4]
        ];

let a = [];

a[0] = [];
a[1] = [];

for(let i = 0; i < m.length; i++) {
    for(let j = 0; j < m[i].length; j++) {

        if(!a[0][j]) { a[0][j] = 1; }
        if(!a[1][i]) { a[1][i] = 1; }

        a[0][j] *= m[i][j];
        a[1][i] *= m[i][j];

        // if(!a[0][j]) { a[0][j] = 0; }
        // if(!a[1][i]) { a[1][i] = 0; }
        // a[0][j] += m[i][j];
        // a[1][i] += m[i][j];
    }
}

console.log("C = " + a[0]);
console.log("R = " + a[1]);