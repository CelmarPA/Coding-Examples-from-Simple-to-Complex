var a = [3, 3, 4, 2, 9, 8, 3];
var l = a.length - 1;

var min = a[0];

for(var k = 0; k <= l; k++) {
    if(a[k] < min) {
        min = a[k];
    }
}

console.log(min);