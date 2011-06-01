var Timer = process.binding('timer').Timer;

var timer=new Timer();
timer.callback=function(){
    console.log("callback called");
};
timer.start(1000,0);