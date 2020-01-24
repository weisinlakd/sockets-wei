const express = require('express');
const path = require('path');
const { TicketControl } = require('./classes/ticket-control');
const app = express();
const http = require('http');
const server = http.createServer(app);

module.exports.io = require('socket.io')(server);
require('./sockets/socket');



// ticket = new TicketControl();

// console.log(ticket)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});