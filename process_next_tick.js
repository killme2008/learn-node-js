function interval(){
    process.nextTick(function () {
        console.log('nextTick callback');
        interval();
    });
}
interval();