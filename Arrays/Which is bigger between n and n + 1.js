var a = [2, 3, 4, 5, 9, 8, 3, 8, 3];
var l = a.length - 1;

var t = '';

for(var k = 0; k <= l; k++) {
    if(a[k] > a[k +1]) {
        t += ">";
    } else {
        t += "<";
    }
}

console.log(t);