const a = [1, 2, 3, 4, 5];
let t = 0;
let b = c1(t, a);
console.log(b);

function c1(t, a) {
    return 5 + c2(t, a);
}

function c2(t, a) {
    return c3(t, a) + 5;
}

function c3(t, a) {
    let s = 1;
    return s + c4(t, a);
}

function c4(t, a) {
    return c5(t, a) + c5(t, a);
}

function c5(t, a) {

    for (let i = 0; i < a.length; i++) {
        t += a[i];
    }

    return t;
}