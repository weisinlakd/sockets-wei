var socket = io();

var label = $('#lblNuevoTicket')
socket.on('connect', ()=>{

    console.log('conectado al servidor');
    
})

socket.on('disconnect', ()=>{

    console.log('desconectado del servidor');

});



$('button').on('click', ( )=> {

    socket.emit('siguienteTicket', null, (resp) => {
        console.log(resp);
        
        label.text(resp);
    })
})


socket.on('estadoActual', (resp) => {

    label.text(resp.estadoActual);
})
