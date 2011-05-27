var a=require('./a');
a.on("ready",function(){
    console.log("b",require.main==module);
    console.log(require.main.filename);
    console.log("module a is ready");
});