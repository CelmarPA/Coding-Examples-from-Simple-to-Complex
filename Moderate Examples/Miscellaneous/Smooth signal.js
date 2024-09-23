let a = [5, 1, 8, 4, 6, 2, 9, 8];

console.log(smooth(a));

function smooth(a) {

    let n = a.length;

    for (let i = 1; i < n - 1; i++) {
        a[i] = (a[i - 1] + a[i + 1]) / 2
    }
    return a;
}