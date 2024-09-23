var A = [
    ["a", 88, 146],
    ["b", 34, 124],
    ["c", 96, 564],
    [100, 12, "d"],
        ];

let t = "";

for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < A[i].length; j++) {

        t += "\n A[" + i + "][" + j + "] = " + A[i][j];
    }
}

console.log(t);