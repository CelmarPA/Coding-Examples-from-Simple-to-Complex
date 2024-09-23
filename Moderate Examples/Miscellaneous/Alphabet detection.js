console.log(alpha("uiuhd87wqsaidhsad"));

function alpha(c) { // Alphabet Detection
    let a = [];
    let t = c.split('');
    let k = t.length;

    for (let i = 0; i <= k; i++) {
        var q = 1;
        for (let j = 0; j <= a.length; j++) {
            if (t[i] === a[j]) { q = 0; }
        }
        if (q === 1) { a. push(t[i]); }
    }
    return a;
}