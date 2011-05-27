var EventEmitter=require('events').EventEmitter;
var util=require('util');
var myEvent=new EventEmitter();

myEvent.on('error',function (){
    console.error("And error occured");
    console.trace();
});

myEvent.on('data',function(data){
    console.log("Receiving data:"+data);
});

myEvent.on('data',function(data){
    console.log("Receiving data:"+data);
});

myEvent.once('data',function(data){
    console.log("Onece receiving data:"+data);
});
console.log(util.inspect(myEvent.listeners('data')));

myEvent.emit('data',"hello world");
console.log(util.inspect(myEvent.listeners('data')));
myEvent.emit('data',"hello world");
//myEvent.setMaxListeners(11);
for(var i=0;i<11;i++)
    myEvent.on('test',function(){});


