module.exports = {
    get : function(server, list){
        server.get('/requestAnimal', function(req,res) {
            const index = req.query.getAnimalIndex - 1;
            console.log(index)
            if(index < list.length && index >= 0) {
                res.send(JSON.stringify(list[index]));
            } else {
                res.send('Lets try a different index number')
            }
        });
}
}
