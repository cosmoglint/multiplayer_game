
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("the server is running");


var socket = require('socket.io');

var io = socket.listen(server);

io.sockets.on('connection', new_connection);

function new_connection(socket){
  console.log("new connection" + socket.id );
}
