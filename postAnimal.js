module.exports = {
    post : function(server, list){
        server.post('/postAnimal', function(req,res) {
            const animalKind = req.body.inputAnimalKind;
            const animalsize = req.body.inputAnimalSize;
            const animalAge = req.body.inputAnimalDays;
            if(animalAge > 0 && animalAge < 30) {
                list.push({animalKind, animalsize, animalAge})
                res.send(JSON.stringify(list));
            } else {
                res.send('invalid input data')
            }
        });
    }
}