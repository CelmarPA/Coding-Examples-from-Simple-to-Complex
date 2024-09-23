let txt = '{"v1":["a","b","c"],"v2":' + 
          '[[0,1,0],[1,1,1],[0,1,0]]' + 
          ',"v3":{"c1":["a","b","c"]' + 
          ',"c2":[[0,1,0],[1,1,1],[0' + 
          ',1,0]],"c3":42}}';

let obj = JSON.parse(txt);

let a = obj.v1;
let b = obj.v2;
let c = obj.v3;

console.log(a);
console.log(b);
console.log(c.c1);
console.log(c.c2);
console.log(c.c3);