var orm = require('../config/orm.js');

var burger_call = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    creatBurger: function(name, cb) {
        orm.insertOne(function(res) {
            cb(res);
        });
    },


    update: function(newID, cb) {
        orm.updateOne(newID, function(res) {
            cb(res);
        });
    }


};

module.exports = burger_call;