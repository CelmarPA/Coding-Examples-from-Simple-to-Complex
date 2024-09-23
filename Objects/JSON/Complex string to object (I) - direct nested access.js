let txt = '{"v1":["a","b","c"],"v2":' + 
          '[[0,1,0],[1,1,1],[0,1,0]]' + 
          ',"v3":{"c1":["a","b","c"]' + 
          ',"c2":[[0,1,0],[1,1,1],[0' + 
          ',1,0]],"c3":42}}';

let obj = JSON.parse(txt);

console.log(obj.v1[1]);
console.log(obj.v2[0][1]);
console.log(obj.v3.c2);
console.log(obj.v3.c2[1][1]);