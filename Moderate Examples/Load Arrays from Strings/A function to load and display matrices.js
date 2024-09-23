var c1 = '12,2,44,1,0|34,5,6,7,8|1,2,3,4,5|' + 
         '5,4,3,2,1';
var c2 = '66,5,45,10,10|37,50,60,17,18|' + 
         '10,25,37,4,5|5,4,3,2,1';
var c3 = '66,5,45,10,10|37,50,60,17,18|' + 
'10,25,37,4,5|5,4,3,2,1';

console.log(SMC(load(c1)));
console.log(SMC(load(c2)));
console.log(SMC(load(c3)));

function load(c) {
    var n = [];
    var m = [];

    var n = c.split('|');

    for (var i = 0; i < n.length; i++) {
        m[i] = n[i].split(',');
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
    for (var i = 0; i < m.length; i++) {
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