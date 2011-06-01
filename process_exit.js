var interval=setInterval(function(){
    process.reallyExit(1);
//    clearInterval(interval);
},1000);
process.on('exit',function(){
    console.log("hello");
});