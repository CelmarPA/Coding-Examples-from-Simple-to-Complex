var m = [
    [2, 4, 6],
    [3, 5 ,6],
    [3, 5, 4]
    ];

var r = "";

for(var i = 0; i < m.length; i++) {
    for(var j = 0; j < m[i].length; j++) {
        r += m[i][j] + " ";
    }
    r += "\n"
}

console.log(r);