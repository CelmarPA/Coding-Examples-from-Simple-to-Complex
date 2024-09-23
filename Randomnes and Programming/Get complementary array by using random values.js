// Understand randomnes - get complementary array by using random values

let a = [1, 0, 0, 1, 1, 1, 0];
let b = [0, 0, 0, 0, 0, 0, 0];

console.log(mutate(a));

function mutate(a) {
    let m = a.length;
    let n = 200;
    let s = 0; // score

    for (let i = 0; i < n; i++) {
        s = 0;
        for (let j = 0; j < m; j++) {
            b[j] = Math.round(Math.random(), 0);

            // Complementary array
            if (b[j] !== a[j]) { s += 1; }

            // Identic array
            // if (b[j] === a[j]) { s += 1; }
        }

        if (s >= m) { return b; }
    }
    return "Not found by random means.";
}