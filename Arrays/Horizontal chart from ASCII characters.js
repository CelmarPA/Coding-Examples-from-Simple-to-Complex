let a = [5, 1, 8, 4, 6, 2, 8, 9];

let c = "#";
let t = '';

let n = a.length;

for(let i = 0; i < n; i++) {
    for(let k = 0; k < a[i]; k++) {
        t += c;
    }

    t += "\n";
}

console.log(t);