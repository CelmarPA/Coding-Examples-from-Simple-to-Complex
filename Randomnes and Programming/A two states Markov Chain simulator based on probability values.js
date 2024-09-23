let draws = 8;
let z = '';

let  Jar = [];
Jar[0] = "";
Jar[1] = "";

Fill_Jar(0, 0.2);
Fill_Jar(1, 0.6);

a = Draw(1);
z = z + "Jar W[" + a + "],\n"

for (let i = 1; i <= draws; i++) {
    if (a === "W") {
        a = Draw(0);
        z = z + "Jar W[" + a + "];\n";
    } else {
        a = Draw(1);
        z = z + "Jar B[" + a + "],\n";
    }
}

console.log(z);

function Draw(S) {
    let rc = 0; // rc = randomly_choose
    rc = Math.random() * Jar[S].length;
    rc = Math.floor(rc);
    let ball = Jar[S].substring(rc, rc + 1);
    return ball;
}

function Fill_Jar(S, p) {
    let Balls_W = Math.round(100 *p);
    let Balls_B = 100 - Balls_W;

    for (let i = 1; i <= Balls_W; i++) {
        Jar[S] = Jar[S] + "W";
    }
    for (let j = 1; j <= Balls_B; j++) {
        Jar[S] = Jar[S] + "B";
    }
}
