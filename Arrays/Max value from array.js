var a = [2, 3, 4, 5, 9, 8, 3];
var l = a.length - 1;

var max = 0;

for(var k = 0; k <= l; k++) {
    if(a[k] > max) {
        max = a [k];
    }
}

console.log(max);