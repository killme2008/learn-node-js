buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


str = "node.js";
buf = new Buffer(str.length);

for (var i = 0; i < str.length ; i++) {
  buf[i] = str.charCodeAt(i);
}

console.log(buf);
console.log(Buffer.isBuffer(buf));
str = '\u00bd + \u00bc = \u00be';
console.log(str + ": " + str.length + " characters, " +
  Buffer.byteLength(str, 'utf8') + " bytes");

buf = new Buffer(1234);
console.log(buf.length);
buf.write("some string", "ascii", 0);
console.log(buf.length);

buf1 = new Buffer(26);
buf2 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
  buf1[i] = i + 97; // 97 is ASCII a
  buf2[i] = 33; // ASCII !
}

buf1.copy(buf2, 8, 16, 20);
console.log(buf2.toString('ascii', 0, 25));


console.time("start");

for(var i=0;i<1000000;i++){
    var buf=new Buffer(16*1024);
}
console.timeEnd("start");

console.time("start");

for(var i=0;i<1000000;i++){
    var buf=new Buffer(1);
}
console.timeEnd("start");