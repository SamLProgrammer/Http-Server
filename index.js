const { json } = require('body-parser');
const express = require('express')
const animalGetter = require('./getAnimal');
const animalPoster = require('./postAnimal');
const animalsCrud = require('./crudContainer');
const server = express()
const routes = require('./routes/routes');

server.use(express.json({limit: '20mb'}));
server.use(express.urlencoded({ extended: false, limit: '20mb' }))
server.set('view engine', 'ejs')
server.set("views",__dirname + "/views")

server.listen(4000, function() {
    console.log('http server on 4000 port')
});

animalGetter.get(server,animalsCrud);

animalPoster.post(server,animalsCrud);

routes.get(server, '/', "index");

routes.get(server, '/other', "index")

routes.get(server, '/postAnimal', "postAnimal")
