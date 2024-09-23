var a = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

var b = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

var i = j = 0;
r = "";
c = [];

n1 = a.length;
n2 = a[0].length;
q = n1 * n2;

c[0] = [];

for(var v = 0; v < q; v++) {

    j = v % n2;
    if(j === 0 && v !== 0 && i < n1 && v !== q) {
        i += 1;
        c[i] = [];
        r += "\n";
    }

    c [i][j] = 0;

    for(var k = 0; k < a[i].length; k ++) {
        c[i][j] += a[k][j] * b[i][k];
    }
    r += c[i][j] + " ";
}

console.log(r);