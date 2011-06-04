
function benchmark(size,repeats){
    var total=0;
    console.log("create %d size buffer for %d times",size,repeats);
    console.time("times");
    for(var i=0;i<repeats;i++){
        total+=new Buffer(size).length;
    }
    console.timeEnd("times");
}
var repeats=10000000;

console.log("warm up...")
benchmark(1024,repeats);
console.log("start benchmark")
benchmark(16*1024,repeats);
benchmark(4096,repeats);
benchmark(4097,repeats);
