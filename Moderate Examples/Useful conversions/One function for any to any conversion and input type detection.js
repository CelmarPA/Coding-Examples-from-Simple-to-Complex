let a = "☁Ѐ.~ text".split("");

console.log("Array a = " + a);

console.log(convert_to("bin", a));

function convert_to(h, a) {
    let n = a.length;
    let t = 0;

    for (let i in a) {
        t += a[i].length;
    }

    t = t / n;

    let q = "txt";
    if (t === 1) {
        q = "txt";
    }
    if (t >= 2 && t < 3) {
        q = "hex";
    }
    if (t >= 3 && t < 4) {
        q = "dec";
    }
    if (t >= 4) {
        q = "bin";
    }

    if (q === h) {
        return a;
    }

    for (let i in a) {
        switch (q + "_" + h) {
            case "txt_hex":
                a[i] = a[i].charCodeAt(0).toString(16);
                a[i] = a[i].length < 2 ? "0" + a[i] : a[i];
                break;

            case "dec_hex":
                a[i] = String.fromCharCode(a[i]);
                a[i] = a[i].charCodeAt(0).toString(16);
                a[i] = a[i].length < 2 ? "0" + a[i] : a[i];
                break;

            case "txt_bin":
                a[i] = a[i].charCodeAt(0).toString(2);
                break;

            case "txt_dec":
                a[i] = a[i].charCodeAt(0);
                break;

            case "hex_dec":
                a[i] = String.fromCharCode(parseInt(a[i], 16));
                a[i] = a[i].charCodeAt(0);
                break;

            case "bin_dec":
                a[i] = String.fromCharCode(parseInt(a[i], 2));
                a[i] = [i].charCodeAt(0);
                break;

            case "hex_txt":
                a[i] = String.fromCharCode(parseInt(a[i], 16));
                break;

            case "bin_txt":
                a[i] = String.fromCharCode(parseInt(a[i], 2));
                break;

            case "dec_txt":
                a[i] = String.fromCharCode(a[i]);
                break;

            case "dec_bin":
                a[i] = String.fromCharCode(a[i]);
                a[i] = a[i].charCodeAt(0).toString(2);
                break;

            case "hex_bin":
                a[i] = parseInt(a[i], 16).toString(2);
                break;

            case "bin_hex":
                a[i] = parseInt(a[i], 2).toString(16);
                break;
        }
    }
    return a;
}
