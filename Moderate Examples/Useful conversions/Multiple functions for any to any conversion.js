let a = "☁Ѐ.~ text".split("");

console.log("Array a = " + a);

console.log("txt_hex = " + txt_hex(a));
console.log("hex_bin = " + hex_bin(a));
console.log("bin_dec = " + bin_dec(a));
console.log("dec_txt = " + dec_txt(a));

console.log("txt_bin = " + txt_bin(a));
console.log("bin_hex = " + bin_hex(a));
console.log("hex_dec = " + hex_dec(a));
console.log("dec_bin = " + dec_bin(a));

console.log("bin_txt = " + bin_txt(a));
console.log("txt_dec = " + txt_dec(a));
console.log("dec_hex = " + dec_hex(a));
console.log("hex_txt = " + hex_txt(a));

function txt_hex(a) {
    for (let i in a) {
        a[i] = a[i].charCodeAt(0).toString(16);
        a[i] = a[i].length < 2 ? "0" + a[i] : a[i];
    }
    return a;
}

function txt_bin(a) {
    for (let i in a) {
        a[i] = a[i].charCodeAt(0).toString(2);
    }
    return a;
}

function txt_dec(a) {
    for(let i in a) {
        a[i] = a[i].charCodeAt(0);
    }
    return a;
}

function hex_txt(a) {
    for (let i in a) {
        a[i] = parseInt(a[i], 16);
        a[i] = String.fromCharCode(a[i]);
    }
    return a;
}

function hex_bin(a) {
    for (let i in a) {
        a[i] = parseInt(a[i], 16).toString(2);
    }
    return a;
}

function hex_dec(a) {
    a = hex_txt(a);

    for (let i in a) {
        a[i] = a[i].charCodeAt(0);
    }
    return a;
}

function bin_hex(a) {
    for (let i in a) {
        a[i] = parseInt(a[i], 2).toString(16);
    }
    return a;
}

function bin_txt(a) {
    for (let i in a) {
        a[i] = parseInt(a[i], 2);
        a[i] = String.fromCharCode(a[i]);
    }
    return a;
}

function bin_dec(a) {
    a = bin_txt(a);

    for (let i in a) {
        a[i] = a[i].charCodeAt(0);
    }
    return a;
}

function dec_hex(a) {
    a = dec_txt(a);
    a = txt_hex(a);
    return a;
}

function dec_txt(a) {
    for (let i in a) {
        a[i] = String.fromCharCode(a[i]);
    }
    return a;
}

function dec_bin(a) {
    a = dec_txt(a);
    a = txt_bin(a);
    return a;
}
