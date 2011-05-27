process.stdin.resume();
process.on('SIGINT',function(){
    console.log("Got sigint,Press CTR-D to exit.");
});