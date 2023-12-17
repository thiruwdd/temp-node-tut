const http = require('http');

const server = http.createServer((req,res) => {
console.log('Event')
res.end('Welcome to the App...!')
})

server.listen(5000, () => {
    console.log('The server PORT : 5000');
})

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end('Welcome to the home page...!')
//     }
//     if(req.url === '/about'){
//         //Blocking code
//         for(let i = 0; i < 100; i++){
//             for(let j = 0; j < 100; j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('Welcome to the about us page....!')
//     }
//     res.end('Error page')
// });