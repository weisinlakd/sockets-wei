var socket = io();


        socket.on('connect', function(){

            console.log('conectado al servidor');
            
        })

        socket.on('disconnect', function(){

            console.log('desconectado del servidor');

        });

        socket.emit('enviarMensaje', {
            // usuario: 'wei',
            mensaje: 'hola wacho'
        }, function (resp) {
            console.log("resp:", resp);
        })

        socket.on('enviarMensaje', function (mensaje) {

            console.log('server:',mensaje);
        })