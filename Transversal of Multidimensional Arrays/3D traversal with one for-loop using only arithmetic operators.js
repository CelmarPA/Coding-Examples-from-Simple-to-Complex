// 3D scan - one for Loop - no if then

var A = [
    [
["a", 55, 146],
["b", 34, 124],
["c", 96, 564],
[100, 12, "d"],
    ],
    [
["e", 88, 146],
["f", 34, 124],
["g", 96, 564],
[100, 12, "h"],           
    ],
    [
["i", 88, 146],
["j", 34, 124],
["k", 96, 564],
[100, 12, "l"],
    ],
    [
["m", 88, 146],
["n", 34, 124],
["o", 96, 564],
[100, 12, "p"],
    ],
    [
["q", 88, 146],
["r", 34, 124],
["s", 96, 564],
[100, 12, "t"],
    ]
    ];

let t = "";

let s = A.length; // 5 matrices
let m = A[0].length; // 4 rows
let n = A[0][0].length; // 3 columns

let i = 0;
let j = 0;
let d = 0;
let k = 0;

let q = n * m * s;

for(let v = 0; v < q; v++) {
    k = v % (m * n);

    j = v % n;
    i = (k - j) / n;
    d = (v - k) / (m * n);

    t += v + " A[" + d + "][" + i + "][" + j + "] = ";
    t += A[d][i][j] + "\n";
}

console.log(t);

// Calculation of variables i, j and d:
/**
 *          k = v % (m x n)
 *          j = v % n
 *          i = (k - j) / n
 *          d = (v - k) / (m x n)
 */