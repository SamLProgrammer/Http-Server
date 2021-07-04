module.exports = {
    get: function(server, route, ejs) {
        server.get(route, function(req,res) {
            res.render(ejs)
        });
    }
}