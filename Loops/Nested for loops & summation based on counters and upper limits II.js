var a = 0;
var m = 4;

for(var j = 1; j <= m; j++) {
    for(var i = 1; i <= j; i++) {
        a = a + (i + j * m);
    }
}

console.log(a);