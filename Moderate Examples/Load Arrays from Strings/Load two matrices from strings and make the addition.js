var c1 = '12,2,44,1,0|34,5,6,7,8|1,2,3,4,5|' + 
         '5,4,3,2,1';
var c2 = '66,5,45,10,10|37,50,60,17,18|' + 
         '10,25,37,4,5|5,4,3,2,1';

var m1 = [] = load(c1);
var m2 = [] = load(c2);

var sm = [];

console.log(SMC(m1));
console.log(SMC(m2));

for (var i = 0; i < m1.length; i++) {
    sm[i] = [];
    for (var j = 0; j < m1[i].length; j++) {
        sm[i][j] = Number(m1[i][j]) + Number(m2[i][j]);
    }
}

console.log(SMC(sm));

function load(c) {

    var n = [];
    var m = []; // Matrix

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
    var r = "";
    for(var i = 0 ; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            r += m[i][j] + ps(m[i][j], 3);
        }
        r += "\n";
    }
    return r;
}

function ps(a, s) {
    var t = "";
    b = s - (a.toString().length % s);
    for (var i = 0; i < b; i++) {
        t += " ";
    }
    return t;
}