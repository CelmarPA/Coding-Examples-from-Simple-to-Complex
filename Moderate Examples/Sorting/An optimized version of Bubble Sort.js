var a = [4, 5, 8, 1, 1, 5, 2, 9];

console.log(bs(a));

function bs(a) {
    var i, j, n, t;
    n = a.length;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                //swap
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }

    return a;
}
