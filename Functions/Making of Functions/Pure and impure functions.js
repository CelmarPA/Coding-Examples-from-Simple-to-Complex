a = 10;
b = pure(a);
console.log(b + " & " + a);

c = inpure(a);
console.log(c + " & " + a);

d = inpure(a);
console.log(d + " & " + a);

function pure(x) {
    return x + x / x - x * x;
}

function inpure(x) {
    a = 11;
    return x + x / x - x * x;
}