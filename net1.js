var net = require('net');

var server = net.createServer(function (socket) {
    socket.write("Echo server\r\n");
    socket.setEncoding('utf-8');
    socket.on('data',function(data){
        if(data=='quit\r\n')
            socket.end();
        else
            socket.write(data);
    });
    //定时输出
    setInterval(function(socket){
        socket.write('tick\r\n');
    },1000,socket);
//  socket.pipe(socket);
});

server.listen(1337, "127.0.0.1");