const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');

const { PORT = 8082, protocol = 'http' } = process.env;

const _protocol = protocol === 'http' ? http : https;

const app = express();
app.use(express.static('public'));

const serverArguments = [app];

if (protocol === 'https') {
    serverArguments.unshift({
        key: fs.readFileSync(path.join(__dirname, 'certs/server.key')),
        cert: fs.readFileSync(path.join(__dirname, 'certs/server.cert'))
    })
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    res.end();
});

_protocol.createServer(...serverArguments).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} with ${protocol} protocol`);
});

