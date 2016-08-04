var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));

var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function(client){
    client.emit('message', {message: 'прівєтік'});
    client.on('send', function(data){
        io.sockets.emit('message', {message:data.message});
    })
})

app.get('/', function(req, res){
    res.render('page');
})
