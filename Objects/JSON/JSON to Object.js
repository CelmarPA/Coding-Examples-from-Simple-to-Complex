// txt is text received in JSON format.
// Convert JSON into a JavaScript object:

txt = '{"v1":1,"v2":2,"v3":3}';

var obj = JSON.parse(txt);

console.log(obj.v1);
console.log(obj.v2);
console.log(obj.v3);