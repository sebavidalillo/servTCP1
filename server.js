const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + data)
        socket.write('Recibido!')
    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

const PORT = process.env.PORT || 3000; // en caso de que el servicio entregue puerto 

server.listen(4000, ()=>{
    console.log('servidor esta escuchando en la puerta', server.address().port)
})