window.onload = function(){
    var socket = io.connect('http://localhost:8080'),
        field = document.getElementById('field'),
        form  = document.getElementById('form'),
        content = document.getElementById('content'),
        messages = [];

    form.onsubmit = function(){
        var text = field.value;
        socket.emit('send', {message:text});
        return false;
    };

    socket.on('message', function(data){
        if(data.message){
            messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++){
                html += messages[i] + '<br/>';
            }
            content.innerHTML = html;
        }
        else{
            console.log('fuuuuuck');
        }
    });
};
