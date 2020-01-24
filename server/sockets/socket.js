const { io } = require('../server')
const { TicketControl } = require('../classes/ticket-control');


let ticketControl = new TicketControl();


io.on('connection', (client) => {
     
    console.log('usuario conectado');


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })


    client.on('siguienteTicket', (data, callback) => {
        
            let siguiente = ticketControl.siguiente();

            callback(siguiente);
        
    })

    client.emit('estadoActual', {
        estadoActual: ticketControl.getUltimo(),
        ultimos4: ticketControl.getUltimos4()
    })

    client.on('atenderTicket', (data, callback) => {
        
        if ( !data.escritorio ) {
            return callback({
                err: true,
                message: "El escritorio es necesario"
            })
        }

        let atenderTicket = ticketControl.atenderTicket( data.escritorio );

        callback(atenderTicket);

        //falta actualizar vista ultimos 4

        client.broadcast.emit('ultimos4',{
            estadoActual: ticketControl.getUltimo(),
            ultimos4: ticketControl.getUltimos4()
        });
    
    })
    
});