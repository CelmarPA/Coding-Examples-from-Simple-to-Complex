A = ["a", "b", "c", "d", "e", "f", "g"];

let i = 0;
let t = "";

while (i < A.length) {
t += "\n i[" + i + "] = " + A[i];
i++;
}

console.log(t);