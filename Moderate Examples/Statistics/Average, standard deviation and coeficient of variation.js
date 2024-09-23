let a = [5, 1, 8, 4, 6, 2, 8, 9];

let b = stat(a);

console.log(b);

function stat(a) {
    let n = a.length;

    let b = 0;
    let e = 0;

    let r = [];
    r[0] = 0; // AV
    r[1] = 0; // SD
    r[2] = 0; // CV

    for (var j = 0; j < n; j++) {
        b += a[j];
    }

    r[0] = b / n;

    for (var j = 0; j < n; j++) {
        e += Math.pow(a[j] - r[0], 2);
    }

    r[1] = Math.sqrt(e / (n - 1));
    r[2] = r[1] / r[0];

    return r;
}
