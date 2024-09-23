var A = [
    ["a", 88, 146],
    ["b", 34, 124],
    ["c", 96, 564],
    [100, 12, "d"],
];

let t = "";
let n = A.length; // rows
let m = A[0].length; // columns

let i = 0;
let j = 0;

for(let v = 0; v < n * m; v++) {

    j = v % m;

    if(v !== 0 && j === 0) {
        i++;
    }
    
    t += v + " A[" + i + "][" + j + "] =";
    t += A[i][j] + "\n";
}

console.log(t);