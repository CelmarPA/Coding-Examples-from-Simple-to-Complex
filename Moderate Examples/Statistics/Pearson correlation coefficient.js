let a = [6, 8, 10];
let b = [12, 10, 20];

console.log(p(a, b));

function p(a, b) {
    let n = a.length;
    let m = [];
    m[0] = 0;
    m[1] = 0;

    for (let i = 0; i < n; i++) {
        m[0] += a[i];
        m[1] += b[i];
    }

    m[0] = m[0] / n; // Mean a
    m[1] = m[1] / n; // Mean b

    let s0 = 0;
    let s1 = 0;
    let s2 = 0;

    for (let i = 0; i < n; i++) {
        s0 += (a[i] - m[0]) * (b[i] - m[1]);
        s1 += Math.pow(a[i] - m[0], 2);
        s2 += Math.pow(b[i] - m[1], 2);
    }

    r = s0 / Math.sqrt(s1 * s2);

    return r;
}
