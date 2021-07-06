module.exports = {
    delete : function(server, list){
        server.get('/deleteAnimal', function(req,res) {
            const index = req.query.deleteAnimalIndex - 1;
            if(index > -1 && index < list.length) {
            list.splice(index,1)
            res.send(list);
            } else {
                res.send('Lets try a different Index')
            }
});
    }
}