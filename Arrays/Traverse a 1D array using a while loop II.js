A = ["a", "b", "c", "d", "e", "f", "g"];

let i = 0;
let t = '';

do {
    t += "\n i[" + i + "] = " + A[i];
    i++
} while (i < A.length);

console.log(t);