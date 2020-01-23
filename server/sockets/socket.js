const { io } = require('../server')

io.on('connection', (client) => {
     
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'wei',
        mensaje: 'bienvenido'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })


    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data)

        client.broadcast.emit('enviarMensaje', data);
        
        // if (data.usuario) {
        //     callback({
        //         resp: 'todo ok'
        //     })
        // } else {
        //     callback({
        //         resp: 'todo mal!!!!!!!!!!'
        //     })
        // }

         
        
    })
    
});