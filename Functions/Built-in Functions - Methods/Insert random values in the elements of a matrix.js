let p = [];
let n = 3;
let m = 3;
let r = '';

for(let i = 0; i <= n; i++) {
    p[i] = [];
    for(let j = 0; j <= m; j++) {
        p[i][j] = Math.floor(Math.random() * 10);
        r += p[i][j] + " ";
    }
    r += "\n";
}

console.log(r);