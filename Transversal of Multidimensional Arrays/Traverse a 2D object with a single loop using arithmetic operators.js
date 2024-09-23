// No if and no integer division (superb)

var A = [
    ["a", 88, 146],
    ["b", 34, 124],
    ["c", 96, 564],
    [100, 12, "d"],
        ];

let t = "";
let n = A.length; // rows
let m = A[0].length; // columns

let i = 0; // row index
let j = 0; // column index

for(let k = 0; k < m * n; k++) {

    j =  k % m;
    i = (k - j) / m;

    t += k + " A[" + i + "][" + j + "] = ";
    t += A[i][j] + "\n";
}

console.log(t);