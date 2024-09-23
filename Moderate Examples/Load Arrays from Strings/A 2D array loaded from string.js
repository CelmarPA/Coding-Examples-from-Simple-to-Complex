var n = [];
var m = []; // Matrix

var c = "AAAAA|BBBBB|CCCCC|DDDDD";
var n = c.split("|");

for (var i = 0; i < n.length; i++) {
    m[i] = n[i].split('');
}

console.log(SMC(m));

function SMC(m) {
    var r = "";
    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            r += m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}