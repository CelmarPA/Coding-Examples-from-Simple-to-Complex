var d = main_app();

function main_app() {

    var a = "10|13|55|56|1|3|123";
    var b = "45|33|55|0|1|22|127";

    var aa = a.split("|");
    var bb = b.split("|");
    var cc = [];

    for (i = 0; i <= aa.length - 1; i++) {
        cc[i] = Daniela(i, aa, bb);
    }

    console.log(cc);
}

function Daniela(i, aa, bb) {
    return Number(aa[i]) * Number(bb[(aa.length - 1) - i]);
}