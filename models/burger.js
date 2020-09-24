var orm = require('../config/orm.js');

var burger_call = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.create(name, function(res) {
            cb(res);
        });
    },


    update: function(newID, cb) {
        orm.update(newID, function(res) {
            cb(res);
        });
    }


};

module.exports = burger_call;