var EventEmitter=require('events').EventEmitter;
module.exports=new EventEmitter();
setTimeout(function(){
    console.log("a",require.main==module);
    console.log(require.main.filename);
    module.exports.emit('ready');
},1000);