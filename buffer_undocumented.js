var buf=new Buffer(1024);

console.log(buf.get(0));
buf.write("hello","utf8");
console.log(buf.get(0));

buf.write("good",'utf-8');
console.log(buf[0]);
console.dir(buf);
console.log(buf.inspect());

console.log(Buffer.poolSize);
Buffer.poolSize=16*1024

var SlowBuffer=require('buffer').SlowBuffer
var buf=new SlowBuffer(1024)
buf.write("hello",'utf-8');
console.log(buf.toString('utf-8',0,5));
console.log(buf[0]);
var sub=buf.slice(1,3);
console.log(sub.length);