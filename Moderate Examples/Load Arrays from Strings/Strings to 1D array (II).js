let d = main_app();
console.log(d);

function main_app() {

    var a = "10|13|55|56|1|3|123";
    var b = "45|33|55|0|1|22|127";

    var aa = a.split("|");
    var bb = b.split("|");
    var cc = [];

    for (i = 0; i <= aa.length - 1; i++) {
        aa[i] = Number(aa[i]);
        bb[i] = Number(bb[i]);
        cc[i] = sebastian(i, aa, bb);
    }

    return cc;
}

function sebastian(i, aa, bb) {
    return aa[i] * bb[(aa.length - 1) - i];
}