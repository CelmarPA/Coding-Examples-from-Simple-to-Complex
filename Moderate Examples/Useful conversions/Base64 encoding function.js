// Base 64 encoding function

var s = "ABC";
var q = encodeBase64(s);
console.log(q);

function encodeBase64(s) {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var b = "";
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i).toString(2);
        while (c.length < 8) {
            c = "0" + c;
        }
        b += c;
    }

    // Pad the binary string to moke its length a multipel of 6

    while (b.length % 6 !== 0) {
        b += "0";
    }

    var r = "";
    for (var i = 0; i < b.length; i += 6) {
        var x = b.substring(i, i + 6);
        var d = parseInt(x, 2);
        r += a[d];
    }

    // Add padding if necessary
    while (r.length % 4 !== 0) {
        r += "=";
    }

    return r;
}