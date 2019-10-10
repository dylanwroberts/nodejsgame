//dependencies and constants
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const chalk = require('chalk');
const path = require('path');
const util = require('./src/shared/util');
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'src', 'client')));
app.use(express.static(path.join(__dirname, 'src', 'shared')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'client', 'client.html'));
});

io.on('connection', socket => {
    console.log('a client has connected');
    socket.on('disconnect', () => { console.log('client has disconnected'); })
});

server.listen(PORT);
console.log(chalk.green('successfully listening on port ' + PORT));