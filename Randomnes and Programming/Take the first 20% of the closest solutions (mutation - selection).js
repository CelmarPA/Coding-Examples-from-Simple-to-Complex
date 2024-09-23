// Understand randomness, take the first 20% of the closest solutions

let a = [1, 0, 0, 1, 1, 1, 0];
let b = [0, 0, 0, 0, 0, 0, 0];

let c = [];

let fit = mutate(c);
console.log(SMC(fit));

function mutate(c) { // Mutate and selec.
    let m = a.length;
    let n = 100; 
    let s = 0; // score
    let k = 0;
    let p = 20; // Select best X%

    // let q = Math.round((m / 100) * (100 - p));

    let q = Math.round(m * (1 - p / 100));

    for (let i = 0; i < n; i++) {
        s = 0;
        c[k] = [];

        for (let j = 0; j < m; j++) {
            b[j] = Math.round(Math.random(), 0);
            if (b[j] === a[j]) { s += 1; }
            c[k][j] = b[j];
        }

        if ( s >= q) {
            c[k][m] = s;
            k++;
        } 
    }
    return c;
}

function SMC(m) {
    let r = "";
    for (let i = 0; i < m.length; i++) {
        for ( let j = 0; j < m[i].length; j++) {
            r += m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}
