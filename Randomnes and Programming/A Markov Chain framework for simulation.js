let P = [
        ["A" , "B" , "C" , "D" ],
        [0.00, 0.50, 0.50, 0.00],
        [0.33, 0.50, 0.33, 0.33],
        [0.00, 1.00, 0.00, 0.00],
        [0.00, 0.00, 1.00, 0.00]
        ];

let n = P.length;
let m = P[0].length;

let Jar = [];

for (let j = 0; j <= m; j++) {
    Jar[j] = Fill_Jar(j);
}

let draws = 10;
let a = Draw(1); // First draw
let q = "";
let z = "";

for (let i = 1; i <= draws; i++) {
    for (let j = 0; j <= m; j++) {
        if (a === P[0][j]) {
            a = Draw(j + 1);
            q = q + P[0][j];
            j = m;
        }
    }
}

console.log("Q = " + q);

function Draw(S) { // rc = randomly_choose
    let rc = Math.random() * Jar[S].length;
    ball = Jar[S].substring(Math.floor(rc), rc + 1);
    return ball;
}

function Fill_Jar(S) {
    let Ltot = 10;
    let k = 1;
    let b = "";
    for (let i = 0; i <= m; i++) {
        k = Math.round(Ltot * P[S][i]);
        for (let j = 1; j <= k; j++) {
            b = b + P[0][i];
        }
    }
    return b;
}

function SMC(m) {
    let r = "";
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            r += m[i][j];
        }
        r += "\n";
    }
    return r;
}
