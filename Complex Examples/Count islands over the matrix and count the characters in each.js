let a = [
    [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
    [ 1, 0, 1, 0, 1, 1, 0, 0, 1, 1 ],
    [ 1, 1, 1, 0, 1, 1, 0, 0, 0, 1 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,],
    [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 ]
    ];

let b = [
    [+1, 0], // right side element
    [-1, 0], // left side element
    [0, +1], // upward side element
    [0, -1], // downward side element
    [+1,+1], // upward-right side element
    [-1,-1], // downward-left side element
    [+1,-1], // downward-right side element
    [-1,+1], // upward-left side element
    ];

let q = ['*', '#', '%', '&'];
let p = [];

console.log("Islands = " + SCAN(a));
console.log(SMC(a));
console.log(p);

function d(a, i, j, n, m, c) {
    if (i < 0 || j < 0 || i > (n - 1) || j > (m - 1) || a[i][j] !== 1) {
        return;
    }

    if (a[i][j] === 1) {
        a[i][j] = q[c - 1];
        // a[i][j] = c + 1;
        p[c - 1] += 1;

        for (let k = 0; k < b.length; k++) {
            d(a, i + b[k][0], j + b[k][1], n, m, c);
        }
    }
}

function SCAN(a) {
    let n = a.length; // row
    let m = a[0].length; // col
    let c = 0; // islands

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] === 1) {
                c++;
                p[c - 1] = 0;
                d(a, i, j, n, m, c);
            }
        }
    }
    return c;
}

function SMC(m) {
    let r = "\n";
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            r += m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}