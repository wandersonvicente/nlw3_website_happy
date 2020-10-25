
// importar dependência
const express = require('express');
//const path = require('path');

// iniciando o express
const server = express()


// criar uma rota
server.get('/', ()=> {
    //console.log(path.join(__dirname, 'views'))
    //return response.sendFile(__dirname)
    //console.log(__dirname)
    console.log('oi direto do backend')
})

// ligar o servidor
server.listen(5500)

