var m = [
    [2, 4, 4],
    [3, 5, 6],
    [3, 5, 4]
    ];

var c = []

for(var i = 0; i < m.length; i++) {
    for(var j = 0; j < m[i].length; j++) {
        if(!c[j]) {
            c[j] = 0;
        }
        c[j] += m[i][j];
        // c[j] *= m[i][j];
    }
}

console.log(c);