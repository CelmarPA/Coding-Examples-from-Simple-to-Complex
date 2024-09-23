var a = "0|13|55|56|1|30|123";
var b = "5|33|55|90|1|22|127";

var aa = a.split("|");
var bb = b.split("|");
var cc = [];

for(var i = 0; i <= aa.length - 1; i++) {
    cc[i] = Number(aa[i]) + Number(bb[i]);
}

console.log(cc);