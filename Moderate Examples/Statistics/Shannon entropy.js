console.log(entropy("uiuhd87wqsaidhsad"));

function entropy(c) {
    let a = alpha(c);
    let n = a.length;
    let k = c.length;
    let e = 0;
    let r = "";
    let l = "";

    for (let i = 0; i <= n - 1; i++) {
        r = c.replace(new RegExp(a[i], "g"), "").length;

        l = a[i];
        a[i] = (k - r) / k;

        // e+= -(a[i] * Log(2, a[i]));
        e += a[i] * Log(2, 1 / a[i]);
    }
    return e;
}

function alpha(c) {
    // Alphabet Detection
    let a = [];
    let t = c.split("");
    let k = t.length;

    for (let i = 0; i <= k; i++) {
        var q = 1;
        for (let j = 0; j <= a.length; j++) {
            if (t[i] === a[j]) {
                q = 0;
            }
        }
        if (q === 1) {
            a.push(t[i]);
        }
    }
    return a;
}

function Log(n, v) {
    return Math.log(v) / Math.log(n);
}
