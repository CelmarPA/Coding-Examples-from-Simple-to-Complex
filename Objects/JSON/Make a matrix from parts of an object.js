let txt = '{"v1":["a","b","c"],"v2":' + 
          '[[0,1,0],[1,1,1],[0,1,0]]' + 
          ',"v3":{"c1":["a","b","c"]' + 
          ',"c2":[[0,1,0],[1,1,1],[0' + 
          ',1,0]],"c3":42}}';

let obj = JSON.parse(txt);
let a = [];

for (let i in obj.v3.c2) {
    a[i] = [];

    for (let j in obj.v3.c2[i]) {
        a[i][j] = obj.v3.c2[i][j];
    }
}

function SMC(m) {
    let r = '';
    for(let i = 0; i < m.length; i++) {
        for(let j = 0; j < m[i].length; j++) {
            r += m[i][j] + " ";
        }
        r += "\n";
    }
    return r;
}

console.log(SMC(a));