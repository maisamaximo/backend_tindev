const express = require('express');
const cors = require('cors'); 
const server = express();
const mongoose = require('mongoose'); // importar antes das rotas
const routes = require('./routes');

mongoose.connect('mongodb+srv://maiferre:maiferre@cluster0-sodwi.mongodb.net/omnistack08?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);