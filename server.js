//dependencies and constants
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const chalk = require('chalk');
const path = require('path');
const util = require('./shared/util');
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'shared')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'client.html'));
});

io.on('connection', socket => {
    console.log('a client has connected');
    socket.on('disconnect', () => { console.log('client has disconnected'); })
});

server.listen(PORT);
console.log(chalk.green('successfully listening on port ' + PORT));