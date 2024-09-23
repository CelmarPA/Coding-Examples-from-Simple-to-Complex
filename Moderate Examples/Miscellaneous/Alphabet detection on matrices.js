let c = [
    [ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ],
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
    [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
    [ 0, 1, 0, 0, 1, 1, 1, 0, 0, 1 ],
    [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
    [ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
        ];

function matrix_alphabet(t) {
    let a = [];
    let n = t.length;
    let m = t[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            var q = 1;
            for (let k = 0; k <+ a.length; k++) {
                if (t[i][j] === a[k]) { q = 0; }
            }
            if ( q === 1) { a.push(t[i][j]); }
        }
    }
    return a;
}

console.log(matrix_alphabet(c));