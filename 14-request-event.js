const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// })

//Using Event Emitter API
const server = http.createServer();

server.on('request', (req,res) => {
    res.end('Welcome to the server port number on : 5000')
})

server.listen(5000);