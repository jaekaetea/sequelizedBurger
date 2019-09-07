var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/burger", function(req, res) {
        db.burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("/api/burger", function(req, res) {
        db.burger.create({
            name: req.body.text
        }).then(function(dbBurger) {
            res.json(dbBurger);
        }).catch(function(err) {
            res.json(err);
        });
    })
}