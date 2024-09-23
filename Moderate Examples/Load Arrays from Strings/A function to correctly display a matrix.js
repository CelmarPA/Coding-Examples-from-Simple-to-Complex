var m = [
        [20, 4, 60],
        [39, 5, 60],
        [3, 50, 40]
        ];

console.log(SMC(m));

function SMC(m) {
    var r = "\n";
    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            r += m[i][j] + ps(m[i][j], 3);
        }
        r += "\n"
    }
    return r;
}

function ps(a, s) {
    var t = "";
    b = s - (a.toString().length % s);
    for (var i = 0; i < b; i++) { t += " "; }
    return t;
}