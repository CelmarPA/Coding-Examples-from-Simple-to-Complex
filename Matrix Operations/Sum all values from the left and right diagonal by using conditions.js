let a = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 1, 2],
        [3, 4, 5, 6]
        ];

let d = [];

d[0] = 0; // Sum on principal diagonal
d[1] = 0; // Sum on secondary diagonal

let n = a.length;
let m = a[0].length;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {

        if(i === j) {
            d[0] += a[i][j];
        }
        if(i + j === (n - 1)) {
            d[1] += a[i][j];
        } 
    }
}

console.log("L = " + d[0] + " | R = " + d[1]);