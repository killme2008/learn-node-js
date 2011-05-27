var timeoutid=setTimeout(function(){
    console.log("hello world");
},2000);
//clearTimeout(timeoutid);
var count=0;
var intervalID=setInterval(function(name){
    if(count++>3)
        clearInterval(intervalID);
    else
        console.log("Hello,"+name+" "+count);
},1000,"dennis");
