var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerList = { burgers: data }
        res.render("index", burgerList);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });

    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function() {
        res.json("Success");
    });
});

module.exports = router;