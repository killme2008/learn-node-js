var buf=new Buffer(1024);

console.log(buf.get(0));
buf.write("hello","utf8");
console.log(buf.get(0));

buf.write("good",'utf-8');
console.log(buf[0]);
console.dir(buf);
console.log(buf.inspect());