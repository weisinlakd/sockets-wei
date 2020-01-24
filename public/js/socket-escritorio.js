var socket = io();

var searchParams = new URLSearchParams (window.location.search);

if ( !searchParams.has('escritorio')){
    window.location = 'index.html';

    throw new Error (' el escritorio es necesario')
}


var escritorio = parseInt(searchParams.get('escritorio'));
var label = $('small');
var h4 = $('h4');

if (isNaN(escritorio)){

    throw new Error (' el escritorio es incorrecto')
}

$('h1').text('Escritorio '+ escritorio)

$('button').on('click', ()=>{
    
    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, (resp)=>{
        console.log(resp);
        if (!resp.numero){
            alert(resp)
            label.text(resp);
            return
        }
        label.text('Ticket n° '+resp.numero)
    })
})