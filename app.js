// ======= GLOBAL ENV ======
const path = require('path'); 
const http = require('http');
const express = require('express'),
    socketio = require('socket.io');
    app = express(),
    bodyParser = require('body-parser');
const server = http.createServer(app);
const io = socketio(server);
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res) => {
    res.render('theGame');
    });



server.on("error", (err) => {
    console.log(err);
    });

server.listen(3000,'127.0.0.1',() => {
    console.log('The Monopoly server has started!');
});

