var n = [];
var m = []; // Matrix

var c = "1,2,4,1,0|3,5,6,7,8|1,2,3,4,5|5,4,3,2,1";
console.log(SMC(Bahdir(c)));

function Bahdir(c) {
    var n = c.split("|");

    for (var i = 0; i < n.length; i++) {
        m[i] = n[i].split(",");
    }

    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            m[i][j] = Number(m[i][j]);
        }
    }
    return m;
}

function SMC(m) {
    var r = "\n";
    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            r += " " + m[i][j] + " ";
        }
        r += "\n"
    }
    return r;
}