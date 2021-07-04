const { json } = require('body-parser');
const express = require('express')
const server = express()
server.use(express.json({limit: '20mb'}));
server.use(express.urlencoded({ extended: false, limit: '20mb' }))
server.set('view engine', 'ejs')
server.set("views",__dirname + "/views")
const list = [ {name: 'cat', size: 'medium', age_in_days: '17'},
{name: 'rat',size: 'small', age_in_days: '19'},
{name: 'turtle',size: 'small', age_in_days: '19'},
{name: 'hamster',size: 'small', age_in_days: '18'},
{name: 'chicken',size: 'small', age_in_days: '10'},
{name: 'eagle',size: 'big', age_in_days: '28'},
{name: 'fish',size: 'small', age_in_days: '20'},
{name: 'lion',size: 'big', age_in_days: '12'} ];

server.listen(4000, function() {
    console.log('http server on 4000 port')
});

server.get('/', function(req,res) {
    res.render("index", {animal : list[0]})
});

server.get('/requestAnimal', function(req,res) {
    const index = req.query.animalIndex - 1;
    console.log(index)
    if(index < list.length && index >= 0) {
        res.send(JSON.stringify(list[index]));
    } else {
        res.send('Lets try a different index number')
    }
});

server.post('/postAnimal', function(req,res) {
    const animalKind = req.body.inputAnimalKind;
    const animalsize = req.body.inputAnimalSize;
    const animalAge = req.body.inputAnimalDays;
    if(animalAge > 0) {

        list.push({name: animalKind,size: animalsize, age_in_days: animalAge})
        res.send(JSON.stringify(list[list.length -1]));
    } else {
        res.send('Lets try a different index number')
    }    
    console.log(JSON.stringify(animalKind));
});