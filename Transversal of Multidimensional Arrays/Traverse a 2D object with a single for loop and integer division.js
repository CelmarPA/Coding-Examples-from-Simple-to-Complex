// Integer division 2D one-for Loop
// no if then involved

var A = [
    ["a", 88, 146],
    ["b", 34, 124],
    ["c", 96, 564],
    [100, 12, "d"],
        ];

let t = "";
let n = A.length; // rows
let m = A[0].length // columns

let i = 0;
let j = 0;

for(let k = 0; k < m * n; k++) {

    j = k % m;
    i = Math.floor(k / m);

    t += k + " A[" + i + "][" + j + "] = ";
    t += A[i][j] + "\n";
}

console.log(t);