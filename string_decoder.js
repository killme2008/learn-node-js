var StringDecoder=require('string_decoder').StringDecoder

var decoder=new StringDecoder('utf-8');
var buf=new Buffer("你好");
decoder.write(buf);
console.dir(decoder);