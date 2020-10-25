// importar dependência
const express = require('express');
const path = require('path');

// iniciando o express
const server = express()


// criar uma rota
server.get('/', (request, response)=> {
    //console.log(path.join(__dirname, 'views'))
    //return response.sendFile(__dirname)
    console.log(__dirname)
})

// ligar o servidor
server.listen(5500)