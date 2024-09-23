let txt = '{"v1":["a","b","c"],"v2":' + 
          '[[0,1,0],[1,1,1],[0,1,0]]' + 
          ',"v3":{"c1":["a","b","c"]' + 
          ',"c2":[[0,1,0],[1,1,1],[0' + 
          ',1,0]],"c3":42}}';

let obj = JSON.parse(txt);
let a = [];

for (let i in obj.v3.c1) {
    a[i] = obj.v3.c1[i];
}

console.log(a);