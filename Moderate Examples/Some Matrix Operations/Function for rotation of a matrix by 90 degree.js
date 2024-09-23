// Left rotation of a matrix by 90 degree without using any extra space

let a = [
        [1, 1, 1, 1],
        [2, 6, 7, 4],
        [2, 0, 2, 4],
        [2, 3, 3, 3]
        ];

console.log(SMC(a));

transpose(a);
console.log(SMC(a));

revColumn(a);
console.log(SMC(a));

function revColumn(a) {
    
    let n = a.length;
    let m =a[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0, k = m - 1; j < k; j++, k--) {
            let t = a[j][i];
            a[j][i] = a[k][i];
            a[k][i] = t;
        }
    }
}

function transpose(a) {
    
    let n = a.length;
    let m = a[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < m; j++) {
            let t = a[j][i];
            a[j][i] = a[i][j];
            a[i][j] = t;
        }
    }
}

function SMC(m) {
    let r = "\n";
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j< m[i].length; j++) {
            r += " " + m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}