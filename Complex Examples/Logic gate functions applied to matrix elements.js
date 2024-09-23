let a = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
];

let b = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
];

var c = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let n = a.length;
let m = a[0].length;
let r = "";

for (var i = 0; i < n; i++) {
    r += "\n";
    for (var j = 0; j < m; j++) {
        c[i][j] = f_xnor(a[i][j], b[i][j]);
        r += c[i][j] + " ";
    }
}

console.log(r);

function f_not(a) {
    return 1 - a;
}

function f_and(a, b) {
    return a * b;
}

function f_or(a, b) {
    return a + b - a * b;
}

function f_nand(a, b) {
    return f_not(f_and(a, b));
}

function f_nor(a, b) {
    return f_not(f_or(a, b));
}

function f_xor(a, b) {
    return a + b - 2 * (a * b);
}

function f_xnor(a, b) {
    return f_not(f_xor(a, b));
}
