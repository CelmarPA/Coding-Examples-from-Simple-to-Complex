// How many 1's in matrix

let a = [[1, 1, 0, 0, 0],
         [0, 1, 0, 0, 1],
         [1, 0, 0, 1, 1],
         [0, 0, 0, 0, 0],
         [1, 0, 1, 0, 1]];

let n = a.length;
let m = a[0].length;
let k = 0;

for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
        if(a[i][j] == 1) {
            k++;
        }
    }
}

console.log(k);