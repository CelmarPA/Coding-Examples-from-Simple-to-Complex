let a = 1;
let b = 0;

switch (a) {
    case 0:
        b = 11;
        break;
    case 1:
        b = 64;
        break;
    case 2:
        b = 33;
        break;
    default:
        b = 0;
        break;
}

console.log(b);