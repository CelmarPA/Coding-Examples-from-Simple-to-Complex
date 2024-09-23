// Local sequence alignment algorithm and the layout

let Match = +2;
let Mismatch = -1;
let gap = -2;

let s0 = "1100111111111001";
let s1 = "00000011111111100000";

let AA = "";
let AM = "";
let AB = "";

let e = " ";

let m = [];
let s = [];

let MMax = 0;
let MMin = 0;

let x = 0;
let y = 0;

// Matrix initialization and completion
s[0] = [];
s[1] = [];

s[0] = s0.split('');
s[1] = s1.split('');

let n_0 = s[0].length + 1;
let n_1 = s[1].length + 1;

for (let i = 0; i < n_0; i++) {
    m[i] = [];

    for (let j = 0; j < n_1; j++) {
        m[i][j] = 0;

        if (i === 1 && j > 1) {
            m[i][j] = m[i][j - 1] + gap;
        }
        if (j === 1 && i > 1) {
            m[i][j] = m[i - 1][j] + gap;
        }

        if (i > 1) { m[i][0] = s[0][i - 2]; }
        if (j > 1) { m[0][j] = s[1][j - 2]; }

        if (i > 1 && j > 1) {
            let A = m[i - 1][j - 1] + f(m[i][0], m[0][j]);
            let B = m[i - 1][j] + gap;
            let C = m[i][j - 1] + gap;
            let D = 0;
            
            m[i][j] = Math.max(A, B, C, D);

            if (m[i][j] > MMax) {
                MMax = m[i][j];
                x = i;
                y = j;
            }
            if (m[i][j] < MMin) {
                MMin = m[i][j];
            }
        }
    }
}

// Trackback & text aligment
let i = x;
let j = y;

while (i > 2 || j > 2) {
    let Ai = m[i][0];
    let Bj = m[0][j];

    A = m[i - 1][j - 1] + f(Ai, Bj);
    B = m[i - 1][j] + gap;
    C = m[i][j - 1] + gap;

    if ( i >= 2 && j >= 2  && m[i][j] === A) {
        AA = Ai + AA;
        AB = Bj + AB;

        if (Ai === Bj) {
            AM = "|" + AM;
        } else {
            AM = e + AM;
        }

        i = i - 1;
        j = j - 1;
    } else {

        if (i >= 2 && m[i][j] === B) {
            AA = Ai + AA;
            AB = "-" + AB;
            AM = e + AM;
            i = i - 1;
        } else {
            AA = "-" + Ai;
            AB = Bj + AB;
            AM = e + AM;
            j = j - 1;
        }
    }

    var r1 = i - 1;
    var r2 = j - 1;

    if (m[i][j] <= 0) { break; }
}

// LAYOUT
let tM = "";
let tS = "";

// Check the end 
AA = AA + s0.substring(x - 1, n_0 - 1);
AB = AB + s1.substring(y - 1, n_1 - 1);

// Check the beginning 
AA = s0.substring(0, r1) + AA;
AB = s1.substring(0, r2) + AB;

if (r1 > r2) {
    let v = r1 - r2;

    for (let u = 1; u <= v; u++) {
        tS = tS + e;
    }

    for (let u = 1; u <= v + r2; u++) {
        tM = tM + e;
    }

    AB = tS + AB;
    AM = tM + AM;
} else {
    let v = r2 - r1;

    for (let u = 1; u <= v; u++) {
        tS = tS + e;
    }

    for (let u = 1; u <= v + r1; u++) {
        tM = tM + e;
    }

    AA = tS + AA;
    AM = tM + AM; 
}

// Print the alignment 
console.log(AA);
console.log(AM);
console.log(AB);

// Matching function
function f(a1, a2) {
    if (a1 === a2) {
        return Match;
    } else {
        return Mismatch;
    }
}
