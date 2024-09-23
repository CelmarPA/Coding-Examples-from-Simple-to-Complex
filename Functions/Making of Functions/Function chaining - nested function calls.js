a = 3;
b = c(c(c(c(a))));
b = -b;

console.log(b);

function c(x) {
    return x + x / x - x * x; 
}