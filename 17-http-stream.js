var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {
    var fileStrem = fs.createReadStream('./content/big.txt', 'utf8');
    fileStrem.on('open', () => {
        fileStrem.pipe(res)
    })
    fileStrem.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)