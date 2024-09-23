let Jar = [];
Jar[0] = "WWBBBBBBBB";
Jar[1] = "WWWWWBBBBB";

let draws = 17;
let z = '';

a = Draw(1);
z = z + "Jar W[" + a + "], \n";


for (var i = 1; i <= draws; i++) {
    if (a === "W") {
        a = Draw(0);
        z = z + "Jar W[" + a + "], \n";
    } else {
        a = Draw(1);
        z = z + "Jar B[" + a + "],\n";
    }
}

console.log(z);

function Draw(S) {
    let rc = 0; // rc = randomy_choose
    rc = Math.random() * Jar[S].length;
    rc = Math.floor(rc);
    let ball = Jar[S].substr(rc, 1);
    return ball;
}