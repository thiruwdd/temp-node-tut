const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about'){
        res.end('Here is about us')
        return
    }
    if(req.url === '/contact'){
        res.end('Contact us for more information!')
        return
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <a href='/'>back</a>
    `)
})

server.listen(5000);